import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

// Lazy-load icons to reduce initial bundle cost
const FaExclamationTriangle = React.lazy(() => import('react-icons/fa').then((m) => ({ default: m.FaExclamationTriangle })));
const FaHome = React.lazy(() => import('react-icons/fa').then((m) => ({ default: m.FaHome })));

function PageNotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-950 via-blue-950 to-violet-950" role="main">
      <div className="text-center max-w-2xl px-4">
        {/* Header with Animation */}
        <div className="animate-fadeIn">
          <Suspense fallback={<span className="block h-16 w-16 mx-auto mb-6" />}>
            <FaExclamationTriangle className="text-amber-500 text-6xl mx-auto mb-6 animate-bounce-slow" aria-hidden="true" />
          </Suspense>
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
          className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition duration-300 transform hover:scale-105 animate-fadeIn delay-400"
          aria-label="Return to Home"
        >
          <Suspense fallback={<span className="inline-block w-4 h-4 mr-2 align-middle" />}>
            <FaHome className="inline mr-2" aria-hidden="true" />
          </Suspense>
          Return to Home
        </Link>
      </div>
    </section>
  );
}

export default React.memo(PageNotFound);