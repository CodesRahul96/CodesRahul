import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
        setErrors({...errors, [name]: null});
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setIsSubmitting(false);
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="py-20 bg-gray-950 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-5 ripple-grid ripple-grid-animated" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Touch</span>
            </h2>
            <div className="h-[3px] w-20 bg-gradient-to-r from-amber-400 via-amber-600 to-transparent mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
                Have a project in mind or simply want to say hello? I'd love to hear from you.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information Column */}
            <motion.div variants={containerVariants} className="space-y-6">
                
                {/* Email Card */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-[#111827]/40 backdrop-blur-xl p-6 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 shadow-2xl group"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-4 bg-amber-500/10 rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                            <FaEnvelope size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-200 mb-1">Email</h3>
                            <a href="mailto:codesrahul96@gmail.com" className="text-gray-400 hover:text-white transition-colors">codesrahul96@gmail.com</a>
                        </div>
                    </div>
                </motion.div>

                {/* Phone Card */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all shadow-lg group"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-4 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                            <FaPhone size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-200 mb-1">Phone</h3>
                            <a href="tel:+918805159425" className="text-gray-400 hover:text-white transition-colors">+91 88051-59425</a>
                        </div>
                    </div>
                </motion.div>

                {/* Location Card */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all shadow-lg group"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-4 bg-purple-500/10 rounded-xl text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                            <FaMapMarkerAlt size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-200 mb-1">Location</h3>
                            <p className="text-gray-400">Pune, Maharashtra, India</p>
                        </div>
                    </div>
                </motion.div>

                {/* Socials */}
                <motion.div variants={itemVariants} className="pt-6">
                    <h4 className="text-gray-400 font-semibold mb-4 uppercase text-sm tracking-wider">Follow Me</h4>
                    <div className="flex gap-4">
                        {[
                            { icon: <FaGithub />, link: "https://github.com/codesrahul96", bg: "hover:bg-gray-800" },
                            { icon: <FaLinkedin />, link: "https://linkedin.com/in/codesrahul", bg: "hover:bg-[#0077b5]" },
                            { icon: <FaTwitter />, link: "https://twitter.com/", bg: "hover:bg-[#1DA1F2]" },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/80 text-gray-300 hover:text-white transition-all duration-300 ${social.bg} hover:-translate-y-1 shadow-md`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Form Column */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="bg-[#111827]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        Send Message <FaPaperPlane className="text-amber-500 text-sm" />
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder=" "
                                    className={`peer w-full bg-gray-950/50 border-2 ${errors.name ? 'border-red-500/50' : 'border-gray-800'} rounded-xl px-4 py-3 text-gray-100 outline-none focus:border-amber-500 transition-colors`}
                                />
                                <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-amber-500 peer-focus:bg-gray-900 peer-focus:px-2 pointer-events-none">
                                    Your Name
                                </label>
                                {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder=" "
                                    className={`peer w-full bg-gray-950/50 border-2 ${errors.email ? 'border-red-500/50' : 'border-gray-800'} rounded-xl px-4 py-3 text-gray-100 outline-none focus:border-amber-500 transition-colors`}
                                />
                                <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-amber-500 peer-focus:bg-gray-900 peer-focus:px-2 pointer-events-none">
                                    Your Email
                                </label>
                                {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder=" "
                                className={`peer w-full bg-gray-950/50 border-2 ${errors.subject ? 'border-red-500/50' : 'border-gray-800'} rounded-xl px-4 py-3 text-gray-100 outline-none focus:border-yellow-500 transition-colors`}
                            />
                            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-yellow-500 peer-focus:bg-gray-900 peer-focus:px-2 pointer-events-none">
                                Subject
                            </label>
                            {errors.subject && <p className="text-red-400 text-xs mt-1 ml-1">{errors.subject}</p>}
                        </div>

                        <div className="relative group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder=" "
                                className={`peer w-full bg-gray-950/50 border-2 ${errors.message ? 'border-red-500/50' : 'border-gray-800'} rounded-xl px-4 py-3 text-gray-100 outline-none focus:border-yellow-500 transition-colors resize-none`}
                            />
                            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-yellow-500 peer-focus:bg-gray-900 peer-focus:px-2 pointer-events-none">
                                Your Message
                            </label>
                            {errors.message && <p className="text-red-400 text-xs mt-1 ml-1">{errors.message}</p>}
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] active:scale-95 transition-all duration-300 flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <FaPaperPlane />}
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>

        {/* Map Section */}
        <motion.div variants={itemVariants} className="w-full h-80 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl relative group">
            <div className="absolute inset-0 bg-gray-900/10 pointer-events-none group-hover:bg-transparent transition-colors z-10" />
            <iframe
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=FV82+53F, Gulab Nagar Rd, Adarsh Nagar, Rd, Chandrabhaga Nagar, Dhankawadi, Pune, Maharashtra 411043&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
                className="w-full h-full"
            ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
