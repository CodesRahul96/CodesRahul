"use server";

import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Validate form data
  if (!name || !email || !message) {
    return { error: "Please fill out all required fields." };
  }

  // Check if API key exists
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return { 
      error: "Server configuration error: Email service is not fully configured yet. Please try reaching out via LinkedIn!" 
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Replace with your verified domain in production if you add one to Resend
      to: "codesrahul96@gmail.com",
      subject: `New Portfolio Message: ${subject || "No Subject"}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Failed to send message. Please try again later." };
  }
};
