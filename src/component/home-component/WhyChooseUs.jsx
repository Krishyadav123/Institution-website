import React from "react";
import { motion } from "framer-motion";

import {
  Award,
  Globe,
  Users,
  Clock,
  Star,
  Zap,
} from "lucide-react";
import scrollToSection from "@/components/layout/ScrollToSection";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Industry Ready Curriculum",
      description:
        "Practical courses designed according to current industry requirements and real-world projects.",
    },
    {
      icon: Globe,
      title: "Modern Technologies",
      description:
        "Learn trending technologies like MERN, React Native, AI, Automation and more.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description:
        "Get guidance and support from experienced mentors throughout your learning journey.",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Online and offline learning options with practical sessions and recorded lectures.",
    },
    {
      icon: Star,
      title: "Career Support",
      description:
        "Resume building, interview preparation and placement guidance for students.",
    },
    {
      icon: Zap,
      title: "Hands-On Projects",
      description:
        "Work on real-world projects to build confidence and strong portfolios.",
    },
  ];

  return (
    <section className="py-10 md:py-20 px-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>

            <span className="text-xs font-semibold tracking-wide text-orange-600">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Why Students Choose{" "}
            <span className="text-orange-500">
              ThreeSyntax
            </span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-5 leading-7">
            We focus on practical learning, real-world skills and career growth
            to help students become industry ready.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white border border-orange-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-all duration-300">
                  <Icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-all duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-7 text-sm">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
           onClick={() => scrollToSection("contact")}
            className="
              bg-orange-500 hover:bg-orange-600
              text-white px-8 py-4 rounded-xl
              text-sm font-semibold
              transition-all duration-300
              shadow-lg hover:scale-105
            "
          >
            Explore Our Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;