import React from "react";
import { motion } from "framer-motion";
import placements from "@/assets/placements.png";

import {
  BriefcaseBusiness,
  TrendingUp,
  Award,
} from "lucide-react";
import scrollToSection from "@/components/layout/ScrollToSection";

const PlacementSection = () => {
  return (
    <section  id="placement" className="bg-white py-10 md:py-20 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>

            <span className="text-xs font-semibold tracking-wide text-orange-600">
              STUDENT PLACEMENTS
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Our Students Are Getting{" "}
            <span className="text-orange-500">
              Placed
            </span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-5 leading-7">
            Real students, real placements and real career growth with
            practical learning and industry-ready skills.
          </p>
        </motion.div>

        {/* Stats */}
        

        {/* Placement Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Image */}
          <img
            src={placements}
            alt="placements"
            className="w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          {/* <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-orange-500/20
              to-transparent
              pointer-events-none
            "
          ></div> */}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
           onClick={() => scrollToSection("contact")}
            className="
              bg-orange-500 hover:bg-orange-600
              text-white
              px-8 py-4
              rounded-xl
              text-sm font-semibold
              transition-all duration-300
              shadow-lg hover:scale-105
            "
          >
            Start Your Career Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementSection;