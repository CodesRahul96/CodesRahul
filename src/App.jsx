import React, { useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  return (
    <>
      <Preloader onLoaded={() => setIsLoaded(true)} />
      {isLoaded && (
        <div className="App flex flex-col min-h-screen">
          {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} /> */}
          <Navbar />
          <main className="flex-grow pt-20"> {/* Added pt-20 here to account for fixed navbar */}
            <Suspense fallback={
                <div className="flex items-center justify-center min-h-[50vh]">
                    <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
            }>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </AnimatePresence>
            </Suspense>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
