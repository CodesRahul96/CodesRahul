"use client";

import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { sendEmail } from "../../actions/sendEmail";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clientAction = async (formData) => {
    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
        toast.error("Please fill in all required fields.");
        return;
    }
    setIsSubmitting(true);
    
    // Call Next.js Server Action
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-10 min-h-screen relative"
    >
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 tracking-tight">
              Contact.
            </h2>
            <div className="w-full h-[1px] bg-white/20 mb-8"></div>
            <p className="text-gray-400 text-lg font-light">
              Have a project in mind? Let&apos;s discuss how we can build it together.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div className="space-y-12">
                <div>
                    <h3 className="text-xl font-serif text-white mb-4">Direct Communication</h3>
                    <div className="space-y-4 text-gray-400 font-light text-sm">
                        <div className="flex flex-col">
                            <span className="uppercase tracking-widest text-[10px] text-gray-600 mb-1">Email</span>
                            <a href="mailto:codesrahul96@gmail.com" className="hover:text-white transition-colors text-lg">codesrahul96@gmail.com</a>
                        </div>
                        <div className="flex flex-col">
                            <span className="uppercase tracking-widest text-[10px] text-gray-600 mb-1">Location</span>
                            <span className="text-lg">Pune, Maharashtra, India</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-serif text-white mb-4">Social Network</h3>
                    <div className="flex gap-6">
                        {[
                            { icon: <FaGithub size={24} />, link: "https://github.com/codesrahul96" },
                            { icon: <FaLinkedin size={24} />, link: "https://linkedin.com/in/codesrahul" },
                            { icon: <FaTwitter size={24} />, link: "https://twitter.com/" },
                        ].map((social, idx) => (
                            <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div>
                <form action={clientAction} className="space-y-8">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                            <label className="text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-transparent border-b border-gray-800 focus:border-white py-2 text-white outline-none transition-colors rounded-none"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-transparent border-b border-gray-800 focus:border-white py-2 text-white outline-none transition-colors rounded-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="bg-transparent border-b border-gray-800 focus:border-white py-2 text-white outline-none transition-colors rounded-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="bg-transparent border-b border-gray-800 focus:border-white py-2 text-white outline-none transition-colors resize-none rounded-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`group flex items-center gap-4 text-sm tracking-widest uppercase font-bold text-white transition-all ${isSubmitting ? 'opacity-50' : 'hover:text-amber-500'}`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
