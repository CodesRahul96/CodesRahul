import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  useEffect(() => {
    document.title = "CodesRahul | Contact";
    try {
      let desc = document.querySelector('meta[name="description"]');
      if (!desc) {
        desc = document.createElement('meta');
        desc.name = 'description';
        document.head.appendChild(desc);
      }
      desc.content = 'Contact Rahul — email, phone and social links. Reach out for web development, freelance or collaborations.';
    } catch {}
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="py-20 bg-gray-950 min-h-screen flex items-center justify-center relative"
    >
      {/* Ripple grid background overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-10 ripple-grid ripple-grid-animated"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-100"
        >
          Get in <span className="text-yellow-400">Touch</span>
        </motion.h2>

        <div className="mx-auto max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Contact Info Card */}
            <motion.aside 
                variants={itemVariants}
                className="md:col-span-1 bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-6">Contact Info</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    Have a project in mind or just want to chat? Feel free to reach out directly or use the form.
                </p>

                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="bg-gray-800 p-3 rounded-full text-yellow-500 shrink-0">
                        <FaEnvelope />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Email</p>
                        <a
                        href="mailto:codesrahul96@gmail.com"
                        className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 break-all font-medium"
                        >
                        codesrahul96@gmail.com
                        </a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="bg-gray-800 p-3 rounded-full text-yellow-500 shrink-0">
                        <FaPhone />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Phone</p>
                        <a href="tel:+918805159425" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 font-medium">
                        +91 88051-59425
                        </a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="bg-gray-800 p-3 rounded-full text-yellow-500 shrink-0">
                        <FaMapMarkerAlt />
                    </div>
                     <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Location</p>
                        <span className="text-gray-200 font-medium">Pune, MH, India</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-800">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Follow Me</h4>
                <div className="flex items-center space-x-4">
                  {[
                      { icon: <FaGithub size={20} />, href: "https://github.com/codesrahul96", color: "hover:text-white" },
                      { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/in/codesrahul", color: "hover:text-blue-400" },
                      { icon: <FaTwitter size={20} />, href: "https://twitter.com/", color: "hover:text-blue-400" }
                  ].map((social, idx) => (
                    <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-gray-800 p-3 rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-700`}
                    >
                        {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>

            {/* Right: Form */}
            <motion.div 
                variants={itemVariants}
                className="md:col-span-2 bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-yellow-500 transition-colors">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all ${errors.name ? "border-red-500" : ""}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1 animate-pulse">{errors.name}</p>}
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-yellow-500 transition-colors">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all ${errors.email ? "border-red-500" : ""}`}
                      placeholder="john@example.com"
                    />
                     {errors.email && <p className="text-red-400 text-xs mt-1 animate-pulse">{errors.email}</p>}
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-yellow-500 transition-colors">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all ${errors.subject ? "border-red-500" : ""}`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1 animate-pulse">{errors.subject}</p>}
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-yellow-500 transition-colors">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all resize-none ${errors.message ? "border-red-500" : ""}`}
                    rows="5"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 animate-pulse">{errors.message}</p>}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map */}
        <motion.div 
            variants={itemVariants}
            className="flex justify-center mt-16"
        >
          <div className="max-w-6xl w-full">
              <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=FV82+53F, Gulab Nagar Rd, Adarsh Nagar, Rd, Chandrabhaga Nagar, Dhankawadi, Pune, Maharashtra 411043&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
