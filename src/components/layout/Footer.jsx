import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import scrollToSection from "./ScrollToSection";
import logo from "../../assets/logo.png";

const footerLinks = [
  { label: "Home",         id: "home"         },
  { label: "About Us",     id: "about"        },
  { label: "Courses",      id: "courses"      },
  { label: "Placements",   id: "placement"    },
  { label: "Contact",      id: "contact"      },
];

const courses = [
  "MERN Stack",
  "React Native",
  "AI & ML",
  "Python",
  "Digital Marketing",
  "UI/UX Design",
  "N8N Automation",
];

const contactInfo = [
  { Icon: Phone,  text: "+91 9343760176"                          },
  { Icon: Mail,   text: "hello@threesyntax.com"                    },
  { Icon: MapPin, text: "162-A 1st Floor, MangalCity Mall, Above Vishal Mega Mart, Vijay Nagar, Indore, MP India"      },
];

const socials = [
  { Icon: Facebook,       href: "#", label: "Facebook"   },
  { Icon: MessageCircle,  href: "#", label: "WhatsApp"   },
  { Icon: Linkedin,       href: "#", label: "LinkedIn"   },
  { Icon: Instagram,      href: "#", label: "Instagram"  },
];

// ── Scroll helper (same logic as Navbar) ──────────────────────────────────

const Footer = () => {
  return (
    <footer className="bg-white border-t border-orange-100 overflow-hidden">

      {/* ── Top CTA Banner ── */}
      <div className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg md:text-xl font-semibold">
              Ready to Start Your Tech Journey?
            </h3>
            <p className="text-orange-100 text-sm mt-1">
              Learn practical skills with real-world projects and mentorship.
            </p>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="shrink-0 bg-white text-orange-500 px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
             <img
                src={logo}
                alt="ThreeSyntax Logo"
                className="w-40 h-auto object-contain"
              />
            </div>

            <p className="text-gray-500 text-sm leading-7 max-w-xs">
              ThreeSyntax helps students learn modern tech skills with practical
              training, live projects and industry-focused learning.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-orange-100 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-bold text-base mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map(({ label, id }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-500 text-sm hover:text-orange-500 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 transition-transform duration-200" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses — non-clickable */}
          <div>
            <h3 className="text-black font-bold text-base mb-5">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li
                  key={course}
                  className="text-gray-500 text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-black font-bold text-base mb-5">Contact Info</h3>
            <div className="space-y-4">
              {contactInfo.map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-orange-500" />
                  </div>
                  <p className="text-sm text-gray-500 leading-6">{text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-orange-100 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} ThreeSyntax. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Built with <span className="text-orange-500">♥</span> by ThreeSyntax
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;