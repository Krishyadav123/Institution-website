import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Service from "./pages/service/Service";
import ContactPage from "./pages/contact/ContactPage";
import ScrollToTop from "./components/layout/TopScroll";
import Home from "./pages/Home/Home";
import InquiryForm from "./components/layout/InquiryForm";
import Courses from "./pages/courses/Courses";
import WhatsappButton from "./components/layout/WhatsappButton";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-white flex items-center justify-center overflow-hidden">
        
        <div className="flex flex-col items-center gap-6">

          {/* Animated Logo Circle */}
          <div className="relative flex items-center justify-center">
            
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
              className="w-24 h-24 rounded-full border-4 border-orange-200 border-t-orange-500"
            />

            {/* Inner Circle */}
            <div className="absolute w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <h1 className="text-white font-bold text-xl">
                TS
              </h1>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                repeatType: "reverse",
              }}
              className="text-2xl font-bold text-gray-800"
            >
              ThreeSyntax
            </motion.h1>

            {/* <p className="text-gray-500 mt-1 text-sm">
              Loading Experience...
            </p> */}
          </div>

          {/* Bottom Dots */}
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
                className="w-3 h-3 bg-orange-500 rounded-full"
              />
            ))}
          </div>

        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <WhatsappButton />

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/form" element={<InquiryForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;