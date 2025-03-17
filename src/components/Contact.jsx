import React, { useState } from "react";
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

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-gray-950 via-blue-950 to-violet-950 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-100 animate-fadeIn bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full bg-gray-900/80 rounded-xl p-8 shadow-2xl border border-gray-800 animate-float">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form with Glass Effect */}
              <div className="bg-gary/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6 text-center">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-700/50 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.name ? "border-red-500 border" : ""
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-700/50 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.email ? "border-red-500 border" : ""
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-700/50 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.subject ? "border-red-500 border" : ""
                      }`}
                      placeholder="Subject"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-700/50 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.message ? "border-red-500 border" : ""
                      }`}
                      rows="5"
                      placeholder="Your message..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-bold py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information and Social Links */}
              <div className="animate-fadeIn delay-400">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6 text-center">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <FaEnvelope className="text-yellow-400 mr-3" />
                    <a
                      href="mailto:your.email@example.com"
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      codesrahul96@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <FaPhone className="text-yellow-400 mr-3" />
                    <a
                      href="tel:+1234567890"
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      +91 8805159425
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <FaMapMarkerAlt className="text-yellow-400 mr-3" />
                    <p className="text-gray-300">
                      Dhankawadi, Pune, MH , India 411043
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                <h3 className="text-2xl font-semibold text-gray-100 mt-8 mb-4 text-center">
                  Follow Me
                </h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/codesrahul96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaGithub size={30} />
                  </a>
                  <a
                    href="https://linkedin.com/in/codesrahul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a
                    href="https://twitter.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaTwitter size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Embed (Optional) */}
        <div className="flex justify-center mb-16">
          <div className="max-w-4xl w-full">
            <div className="mt-16 animate-fadeIn delay-600">
              <h3 className="text-2xl font-semibold text-center text-gray-100 mb-6">
                Find Me Here
              </h3>
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

        {/* FAQ Section */}
        <div className="flex justify-center mb-16">
          <div className="max-w-4xl w-full">
            <div className="mt-16 animate-fadeIn delay-800">
              <h3 className="text-2xl font-semibold text-center text-gray-100 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-medium text-gray-100">
                    What services do you offer?
                  </h4>
                  <p className="text-gray-400 mt-2">
                    I offer full-stack development services, including web
                    development, UI/UX design, and API integration. Let's
                    discuss your project needs!
                  </p>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-medium text-gray-100">
                    How can I collaborate with you?
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Simply fill out the contact form above or reach out via
                    email or social media. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-medium text-gray-100">
                    What is your response time?
                  </h4>
                  <p className="text-gray-400 mt-2">
                    I typically respond within 24-48 hours. If it's urgent, feel
                    free to mention that in your message!
                  </p>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-medium text-gray-100">
                    Do you offer freelance work?
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Yes, I’m available for freelance projects. Contact me with
                    your requirements for a quote!
                  </p>
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
