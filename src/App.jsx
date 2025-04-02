import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Preloader from "./components/Preloader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Preloader onLoaded={() => setIsLoaded(true)} />
      {isLoaded && (
        <div className="App flex flex-col min-h-screen">
          {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} /> */}
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all route for 404 */}
              <Route path="*" element={<PageNotFound />} />{" "}
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
