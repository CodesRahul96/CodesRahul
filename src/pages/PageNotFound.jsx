import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

function PageNotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-950 via-blue-950 to-violet-950">
      <div className="text-center max-w-2xl px-4">
        {/* Header with Animation */}
        <div className="animate-fadeIn">
          <FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-6 animate-bounce-slow" />
          <h1 className="text-6xl font-extrabold text-gray-100 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">Page Not Found</h2>
        </div>

        {/* Error Message */}
        <p className="text-gray-400 text-lg mb-8 animate-fadeIn delay-200">
          Oops! It seems you've wandered into uncharted territory. The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Call to Action */}
        <Link
          to="/"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animate-fadeIn delay-400"
        >
          <FaHome className="inline mr-2" /> Return to Home
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;