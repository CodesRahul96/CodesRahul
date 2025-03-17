import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiJest } from 'react-icons/si';
import { TbBrandThreejs } from "react-icons/tb";

import profileImage from '../assets/developer.jpg'; // Adjust path as needed

function About() {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3 />, level: 90 },
    { name: 'JavaScript', icon: <FaJsSquare />, level: 90 },
    { name: 'TailwindCSS', icon: <SiTailwindcss />, level: 85 },
    { name: 'Three.js', icon: <TbBrandThreejs />, level: 75 },
    { name: 'Git', icon: <FaGitAlt />, level: 80 },
    { name: 'Database (MongoDB)', icon: <FaDatabase />, level: 70 },
    { name: 'Figma', icon: <SiFigma />, level: 65 },
    { name: 'Jest', icon: <SiJest />, level: 60 },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-950 via-blue-550 to-violet-950 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-center mb-12">
          <div className="max-w-3xl w-full text-center">
            <h2 className="text-4xl font-bold text-gray-100 animate-fadeIn">
              About Me
            </h2>
          </div>
        </div>

        {/* About Me Section */}
        <div className="flex justify-center mb-16">
          <div className="max-w-4xl w-full">
            <div className="flex flex-col md:flex-row items-center gap-8 animate-fadeIn delay-200">
              {/* Left Side: Profile Image */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <img
                  src={profileImage}
                  alt="Rahul Profile"
                  className="w-64 h-64 object-cover rounded-full shadow-lg"
                />
              </div>
              {/* Right Side: Titles and Description */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">Who Am I?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am Rahul, a dedicated Full Stack Developer with over 3 years of experience in crafting dynamic and responsive web applications. My journey in tech began with a passion for problem-solving, which led me to master a wide range of technologies. I thrive on building user-friendly interfaces and robust back-end systems, always striving to deliver innovative solutions that exceed expectations.
                </p>
                <p className="text-gray-300 text-lg mt-4">
                  Outside of coding, I enjoy exploring new frameworks, contributing to open-source projects, and staying updated with the latest industry trends. Let's connect and create something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-3xl md:max-w-4xl animate-fadeIn delay-400">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-100">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 mr-2">{skill.icon}</span>
                    <h4 className="text-gray-200 font-medium">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-yellow-500 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="flex justify-center mb-16">
          <div className="max-w-3xl w-full text-center animate-fadeIn delay-600">
            <h3 className="text-2xl font-semibold mb-6 text-gray-100">Get in Touch</h3>
            <p className="text-gray-300 text-lg mb-4">
              Interested in collaborating or just want to say hi? Reach out to me via:
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:your.email@example.com"
                className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Fun Fact Section */}
        <div className="flex justify-center">
          <div className="max-w-3xl w-full text-center animate-fadeIn delay-800">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">Fun Fact</h3>
            <p className="text-gray-400 italic">
              "I once coded a website in a single night to help a friend showcase their art—talk about a creative rush!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;