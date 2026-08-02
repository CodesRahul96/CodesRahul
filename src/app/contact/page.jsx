"use client";

import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaCopy, FaCheck, FaArrowRight } from "react-icons/fa";
import { toast } from "sonner";
import { sendEmail } from "../../actions/sendEmail";

const projectScopes = [
  "Full Stack MERN Web App",
  "Mobile App Development",
  "UI/UX Architecture Redesign",
  "API & Backend Engineering"
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectScope = (scope) => {
    setFormData((prev) => ({
      ...prev,
      subject: `Project Inquiry: ${scope}`
    }));
    toast.success(`Selected topic: ${scope}`);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("codesrahul96@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const clientAction = async (formData) => {
    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    
    const result = await sendEmail(formData);
    
    setIsSubmitting(false);
    
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Message sent successfully! I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section className="py-12 min-h-screen relative text-white animate-fadeIn">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mb-4 tracking-tight">
              Contact.
            </h2>
            <div className="w-full h-[1px] bg-gradient-to-r from-amber-500/50 via-cyan-500/50 to-transparent mb-6" />
            <p className="text-gray-400 text-lg font-light max-w-xl">
              Have a project in mind or want to collaborate? Send a message and let&apos;s build together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Info Sidebar */}
          <div className="lg:col-span-5 space-y-8 p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">Direct Contact</span>
                <h3 className="text-2xl font-serif font-medium text-white mt-1 mb-4">Let&apos;s Talk</h3>
                <div className="space-y-4 text-gray-300 font-light text-sm">
                  <div className="flex flex-col">
                    <span className="uppercase font-mono text-[10px] text-gray-500 mb-1">Email Address</span>
                    <div className="flex items-center gap-2">
                      <a href="mailto:codesrahul96@gmail.com" className="hover:text-amber-400 transition-colors text-base font-medium">
                        codesrahul96@gmail.com
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1.5 rounded-md bg-white/5 border border-white/10 text-gray-400 hover:text-amber-400 hover:border-amber-500/30 transition-all text-xs"
                        title="Copy Email"
                      >
                        {copiedEmail ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase font-mono text-[10px] text-gray-500 mb-1">Current Location</span>
                    <span className="text-base text-gray-200">Pune, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-2 block">Connect Online</span>
                <div className="flex gap-4">
                  {[
                    { icon: <FaGithub size={18} />, link: "https://github.com/codesrahul96", label: "GitHub" },
                    { icon: <FaLinkedin size={18} />, link: "https://linkedin.com/in/codesrahul", label: "LinkedIn" },
                    { icon: <FaEnvelope size={18} />, link: "mailto:codesrahul96@gmail.com", label: "Email" },
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-amber-400 hover:border-amber-500/40 hover:scale-110 active:scale-95 transition-all"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
              ⚡ Typically responding within 24 hours.
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl">
            
            {/* Interactive Scope Chips */}
            <div className="mb-6">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2.5 block">
                Select Project Interest:
              </label>
              <div className="flex flex-wrap gap-2">
                {projectScopes.map((scope) => (
                  <button
                    type="button"
                    key={scope}
                    onClick={() => handleSelectScope(scope)}
                    className="text-[10px] font-mono uppercase tracking-wider px-3.5 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-200"
                  >
                    + {scope}
                  </button>
                ))}
              </div>
            </div>

            <form action={clientAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-white/5 border border-white/10 focus:border-amber-500/50 p-3.5 text-xs font-mono text-white placeholder-gray-600 outline-none transition-all rounded-xl backdrop-blur-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-white/5 border border-white/10 focus:border-amber-500/50 p-3.5 text-xs font-mono text-white placeholder-gray-600 outline-none transition-all rounded-xl backdrop-blur-md"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Opportunity"
                  className="bg-white/5 border border-white/10 focus:border-amber-500/50 p-3.5 text-xs font-mono text-white placeholder-gray-600 outline-none transition-all rounded-xl backdrop-blur-md"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  className="bg-white/5 border border-white/10 focus:border-amber-500/50 p-3.5 text-xs font-mono text-white placeholder-gray-600 outline-none transition-all resize-none rounded-xl backdrop-blur-md"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full group flex items-center justify-center gap-3 text-xs font-mono uppercase tracking-widest font-bold py-4 px-8 rounded-full bg-amber-500 hover:bg-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
