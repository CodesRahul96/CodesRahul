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

  // Update Page Title
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gray-950 min-h-screen flex items-center justify-center relative"
    >
      {/* Ripple grid background overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-10 ripple-grid ripple-grid-animated"
      />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-100 animate-fadeIn">
          Get in Touch
        </h2>

        <div className="mx-auto max-w-5xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Contact Info Card */}
            <aside className="md:col-span-1 bg-gray-900/70 rounded-xl p-6 border border-gray-800 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">Contact Information</h3>
                <p className="text-gray-400 mb-6">Prefer email? Use the form or reach out directly.</p>

                <ul className="space-y-4">
                  <li className="flex items-start md:items-center space-x-3">
                    <FaEnvelope className="text-yellow-400 mt-1 md:mt-0" />
                    <a
                      href="mailto:codesrahul96@gmail.com"
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 break-words"
                      aria-label="Email"
                    >
                      codesrahul96@gmail.com
                    </a>
                  </li>

                  <li className="flex items-start md:items-center space-x-3">
                    <FaPhone className="text-yellow-400 mt-1 md:mt-0" />
                    <a href="tel:+918805159425" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300" aria-label="Phone">
                      +91 88051-59425
                    </a>
                  </li>

                  <li className="flex items-start md:items-center space-x-3">
                    <FaMapMarkerAlt className="text-yellow-400 mt-1 md:mt-0" />
                    <span className="text-gray-300">Pune, MH, India 411043</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-100 mb-3">Follow Me</h4>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/codesrahul96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <FaGithub size={26} />
                  </a>
                  <a
                    href="https://linkedin.com/in/codesrahul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={26} />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={26} />
                  </a>
                </div>
              </div>
            </aside>

            {/* Right: Form */}
            <div className="md:col-span-2 bg-gray-900/70 rounded-xl p-6 border border-gray-800 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.name ? "border-red-500 border" : ""}`}
                      placeholder="Your name"
                      aria-invalid={errors.name ? true : false}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.email ? "border-red-500 border" : ""}`}
                      placeholder="your.email@mail.com"
                      aria-invalid={errors.email ? true : false}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.subject ? "border-red-500 border" : ""}`}
                    placeholder="Subject"
                    aria-invalid={errors.subject ? true : false}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.message ? "border-red-500 border" : ""}`}
                    rows="6"
                    placeholder="Write your message..."
                    aria-invalid={errors.message ? true : false}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-lg shadow hover:scale-105 transform transition"
                  >
                    Send Message
                  </button>

                  <div className="text-sm text-gray-400">Typically responds within 12-24 hours</div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map & FAQ kept below for continuity */}
        <div className="flex justify-center mt-12">
          <div className="max-w-5xl w-full">
            <div className="mt-8 animate-fadeIn">
              <h3 className="text-2xl font-semibold text-center text-gray-100 mb-6">Find Me Here</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg border border-gray-800">
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
          </div>
        </div>

        <div className="flex justify-center mb-16 mt-12">
          <div className="max-w-5xl w-full">
            <div className="mt-8 animate-fadeIn">
              <h3 className="text-2xl font-semibold text-center text-gray-100 mb-6">Frequently Asked Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-medium text-gray-100">What services do you offer?</h4>
                  <p className="text-gray-400 mt-2">I offer full-stack development services, including web development, UI/UX design, and API integration. Let's discuss your project needs!</p>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-medium text-gray-100">How can I collaborate with you?</h4>
                  <p className="text-gray-400 mt-2">Simply fill out the contact form above or reach out via email or social media. I'll get back to you as soon as possible.</p>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-medium text-gray-100">What is your response time?</h4>
                  <p className="text-gray-400 mt-2">I typically respond within 12-24 hours. If it's urgent, feel free to mention that in your message!</p>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-medium text-gray-100">Do you offer freelance work?</h4>
                  <p className="text-gray-400 mt-2">Yes, I’m available for freelance projects. Contact me with your requirements for a quote!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
