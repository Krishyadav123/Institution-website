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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data or assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed (2 seconds here)

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1>Loading...</h1>
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