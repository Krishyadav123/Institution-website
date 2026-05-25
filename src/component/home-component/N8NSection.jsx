import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bot,
  MessageCircle,
  Workflow,
  Award,
  Tag,
  Flame,
  Star,
  Users,
  Clock,
  Zap,
  ChevronRight,
  Play,
  Sparkles,
} from "lucide-react";
import n8n from "../../assets/n8n.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const features = [
  {
    icon: Bot,
    title: "Build Real AI Agents",
    desc: "Create intelligent bots that automate tasks using OpenAI, Gmail, Sheets & more — no coding needed.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation Bots",
    desc: "Build automated WhatsApp responders for business enquiries, lead capture & follow-ups.",
  },
  {
    icon: Workflow,
    title: "1000+ Ready Workflows",
    desc: "Get ₹40,000 worth of pre-built n8n workflows — deploy instantly for real business use cases.",
  },
  {
    icon: Award,
    title: "Certificates + Free Internship",
    desc: "Industry certificates & a free internship included.",
  },
  {
    icon: Tag,
    title: "98% OFF — Limited Time",
    desc: "Original price ₹28,000. Enroll today for just ₹999. Offer ends soon — seats are limited!",
  },
];

const stats = [
  { icon: Users, num: "156+", label: "Students Enrolled" },
  { icon: Star, num: "4.9 ★", label: "Average Rating" },
  { icon: Clock, num: "6 Wks", label: "Course Duration" },
];

const tags = ["AI Agents", "WhatsApp Bot", "OpenAI", "Enterprise", "No-Code"];

function PulsingDot() {
  return (
    <span className="relative flex h-3.5 w-3.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500" />
    </span>
  );
}

function FeatureCard({ icon: Icon, title, desc, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ scale: 1.02, borderColor: "rgba(167,139,250,0.6)" }}
      className="flex items-start gap-4 bg-[#ffffff]  rounded-lg p-4 transition-colors duration-200 cursor-default"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-md bg-[#ea4b71] flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <p className="text-sm font-semibold text-black mb-1">{title}</p>
        <p className="text-xs text-gray-700 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function StatCard({ icon: Icon, num, label, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#ffffff]  rounded-lg p-4 text-center"
    >
      <Icon className="w-4 h-4 text-[#ea4b71] mx-auto mb-2" />
      <p className="text-xl font-bold text-[#ea4b71]">{num}</p>
      <p className="text-xs text-gray-700 mt-1">{label}</p>
    </motion.div>
  );
}

const N8nSection = () => {
  const sectionRef = useRef(null);

  return (
    <section
    id="trending"
      ref={sectionRef}
      className="flex items-center justify-center"
    >
<div className="relative max-w-7xl bg-[#0d0d0d] rounded-3xl px-6 py-14 md:px-12 md:py-20 overflow-hidden my-10 mx-4 md:mx-8">
          {/* Glow bg effects */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#ea4b705d] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#ea4b7030] blur-2xl" />

      {/* Grid texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-5 w-fit"
      >
        <span className="flex items-center gap-2 bg-white border border-white rounded-full px-4 py-1.5 text-xs text-red-500 uppercase tracking-widest font-bold">
          <PulsingDot />
          Trending Now at ThreeSyntax
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl"
      >
        n8n{" "}
        <span className="text-[#ea4b71]">AI Automation</span>
        <br className="hidden md:block" /> is the Future —{" "}
        <span className="text-[#ea4b71]">Learn it Now</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl"
      >
        Build AI Agents, WhatsApp Bots & enterprise workflows without writing
        complex code. The most in-demand skill of 2026.
      </motion.p>

      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image placeholder */}
          <div className="relative bg-[#ffffff]  rounded-lg min-h-[220px] md:min-h-[260px] flex flex-col items-center justify-center gap-4 mb-5 overflow-hidden">
            {/* Replace below div with <img src="..." /> */}
            <div className="">
                <img src={n8n} alt="n8n course preview" className="w-64 rounded-lg" />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="bg-[#EA4B71]  rounded-full px-3 py-1 text-xs text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} index={i} />
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-[#ea4b71] hover:bg-[#d43a5f] text-white rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200"
            >
              <Zap className="w-4 h-4" />
              Enroll Now — ₹999
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-transparent border border-[#ea4b71]/40 hover:border-[#ea4b71] text-[#ea4b71] rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200"
            >
              <Play className="w-4 h-4" />
              Watch Free Demo
            </motion.button>

            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/25 rounded-full px-3 py-1.5 text-xs text-red-400"
            >
              <Flame className="w-3.5 h-3.5" />
              Hot Selling
            </motion.span>
          </motion.div>

          {/* Offer line */}
          <motion.p
            variants={fadeUp}
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-xs text-gray-600 flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3 text-[#ea4b71]" />
            Limited seats left — offer ends soon
          </motion.p>
        </motion.div>

        {/* RIGHT — Feature cards */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}

          {/* Explore full course link */}
          <motion.a
            href="#"
            custom={features.length}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-[#ea4b71] text-sm font-medium mt-2 w-fit group"
          >
            Explore Full Course Syllabus
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
</div>
    </section>
  );
}

export default N8nSection