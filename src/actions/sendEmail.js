"use server";

import { Resend } from "resend";
import { headers } from "next/headers";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory sliding-window rate limiter (prevents automated flooding / spam attacks)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // max 3 messages per minute per IP

function isRateLimited(clientIp) {
  const now = Date.now();
  const clientData = rateLimitMap.get(clientIp) || { count: 0, firstRequestTime: now };

  // Reset window if expired
  if (now - clientData.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(clientIp, { count: 1, firstRequestTime: now });
    return false;
  }

  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  clientData.count += 1;
  rateLimitMap.set(clientIp, clientData);
  return false;
}

// Clean up old rate limit entries every 10 minutes to prevent memory leak
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, data] of rateLimitMap.entries()) {
      if (now - data.firstRequestTime > RATE_LIMIT_WINDOW_MS * 2) {
        rateLimitMap.delete(ip);
      }
    }
  }, 10 * 60 * 1000);
}

export const sendEmail = async (formData) => {
  // 1. Honeypot check (hidden field for spam bots)
  const honeypot = formData.get("_gotcha");
  if (honeypot) {
    // Silently drop bot submissions without raising alert to bot
    return { success: true };
  }

  // 2. IP-based rate limiting
  try {
    const headerList = await headers();
    const forwardedFor = headerList.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return { 
        error: "Too many messages sent. Please wait 60 seconds before sending another inquiry." 
      };
    }
  } catch (err) {
    // Continue gracefully if headers cannot be resolved
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  // 3. Strict Input Validation & Length Bounds
  if (!name || !email || !message) {
    return { error: "Please fill out all required fields." };
  }

  if (name.length > 100 || email.length > 150 || subject.length > 150) {
    return { error: "Input exceeds allowable character limits." };
  }

  if (message.length > 3000) {
    return { error: "Message is too long. Please keep under 3,000 characters." };
  }

  // Basic RFC 5322 regex for email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  // Prevent email header injection attacks in subject line
  const sanitizedSubject = subject.replace(/[\r\n]+/g, " ");

  // Check if API key exists
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return { 
      error: "Email service is temporarily unavailable. Please connect directly via LinkedIn or email: codesrahul96@gmail.com" 
    };
  }

  try {
    await resend.emails.send({
      from: "CodesRahul Contact <onboarding@resend.dev>",
      to: "codesrahul96@gmail.com",
      subject: `[Portfolio Inquiry] ${sanitizedSubject || "New Project Discussion"}`,
      reply_to: email,
      text: `Client Name: ${name}\nClient Email: ${email}\nPhone: ${phone || "Not provided"}\n\nProject Scope/Message:\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Failed to transmit message securely. Please email codesrahul96@gmail.com directly." };
  }
};
