import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "home",         label: "Home"         },
    { id: "about",        label: "About"        },
    { id: "courses",      label: "Courses"      },
    { id: "placement",    label: "Placement"    },
    { id: "testimonials", label: "Testimonials" },
    { id: "trending",     label: "Trending", hot: true },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight + 16 : 80;
      const top =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }, 150);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4 flex justify-center">
      <div className="w-full max-w-7xl bg-white/90 backdrop-blur-xl border border-orange-100 shadow-lg rounded-2xl px-5 md:px-7 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => scrollToSection("home")} className="flex items-center">
            <img
              src={logo}
              alt="ThreeSyntax Logo"
              className="w-40 h-auto object-contain"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-all duration-300"
              >
                {link.label}
                {link.hot && (
                  <span className="absolute top-2 right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 rounded-xl border border-orange-100 flex items-center justify-center text-black hover:bg-orange-50 transition-all duration-300"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 mt-5 pt-5 border-t border-orange-100">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="relative text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-all duration-300"
                  >
                    {link.label}
                    {link.hot && (
                      <span className="absolute top-3.5 ml-1.5 inline-flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                      </span>
                    )}
                  </button>
                ))}

                {/* Mobile CTA */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 mt-2"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;