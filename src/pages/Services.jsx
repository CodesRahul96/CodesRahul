import React, { useEffect } from "react";

// Move static services list to module scope so it's not recreated on every render
const SERVICES = [
  {
    title: "Web Development",
    description:
      "Building responsive, modern websites using HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS.",
    features: ["Custom UI/UX", "Responsive Design", "Performance Optimization", "SEO Friendly"],
  },
  {
    title: "MERN Stack Development",
    description:
      "Full-stack applications with MongoDB, Express.js, React, and Node.js, including RESTful APIs and authentication.",
    features: ["Database Design", "API Development", "State Management", "Scalable Architecture"],
  },
  {
    title: "UI/UX Design",
    description:
      "Creating user-friendly interfaces with a focus on aesthetics and functionality using tools like Figma.",
    features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
  },
  {
    title: "Consulting & Maintenance",
    description:
      "Providing technical guidance, code reviews, and ongoing support for existing web applications.",
    features: ["Code Optimization", "Bug Fixing", "Performance Audits", "Tech Strategy"],
  },
];

const ServiceCard = React.memo(function ServiceCard({ service }) {
  return (
    <article
      className="bg-gray-800/50 p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      tabIndex={0}
      aria-labelledby={`service-${service.title}`}
    >
      <h2 id={`service-${service.title}`} className="text-xl font-semibold text-purple-400 mb-3 font-inter">
        {service.title}
      </h2>
      <p className="text-gray-300 mb-4 font-merriweather">{service.description}</p>
      <ul className="text-gray-400 font-merriweather list-disc list-inside">
        {service.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
});

function Services() {
  useEffect(() => {
    document.title = "Services - CodesRahul";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 animate-gradient-bg"></div>
      <div className="relative z-10 max-w-5xl mx-auto p-8 min-h-screen flex flex-col justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 p-8">
          <h1 className="text-4xl font-extrabold text-white mb-6 font-inter text-center">My Services</h1>
          <p className="text-gray-300 text-center mb-12 font-merriweather">Comprehensive solutions for your web development needs</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Services);