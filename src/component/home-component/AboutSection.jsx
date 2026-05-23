"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Handshake,
  MapPin,
  Star,
  Clock,
  Eye,
  Target,
  Lightbulb,
  Users,
  CheckCircle,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import scrollToSection from "@/components/layout/ScrollToSection";

// ── Animated counter ───────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    };
    requestAnimationFrame(tick);
  }, [start, target, duration]);
  return value;
}

// ── Data ───────────────────────────────────────────────────────────────────
const stats = [
  { id: "placed",    target: 2500, suffix: "+", label: "Students Placed"  },
  { id: "courses",   target: 12,   suffix: "+", label: "Courses Offered"  },
  { id: "placement", target: 94,   suffix: "%", label: "Placement Rate"   },
];

const trust = [
  { Icon: Trophy,    text: "Award-Winning Faculty" },
  { Icon: Handshake, text: "50+ Hiring Partners"   },
  { Icon: MapPin,    text: "Based in India"         },
];

const visionPoints = [
  { Icon: TrendingUp, text: "Lead India's digital upskilling movement"           },
  { Icon: Users,      text: "Build a community of 10,000+ trained professionals" },
  { Icon: BookOpen,   text: "Expand globally with world-class curriculum"        },
];

const missionPoints = [
  { Icon: CheckCircle, text: "Deliver industry-relevant, project-based learning" },
  { Icon: Lightbulb,   text: "Provide mentorship from working professionals"     },
  { Icon: Target,      text: "Ensure every student gets placed, not just trained" },
];

// ── Stat card ──────────────────────────────────────────────────────────────
function StatCard({ target, suffix, label, started }) {
  const count = useCountUp(target, 1800, started);
  return (
    <div className="bg-[#fafafa] border border-[#f0ede8] rounded-xl p-4">
      <div className="leading-none">
        <span className="text-[28px] font-extrabold text-orange-500">{count}</span>
        <span className="text-lg font-extrabold text-orange-500">{suffix}</span>
      </div>
      <div className="text-[11px] text-[#888] mt-1.5 font-medium leading-snug">
        {label}
      </div>
    </div>
  );
}

// ── Vision / Mission card ──────────────────────────────────────────────────
function VMCard({ type, Icon, title, desc, points, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border-[1.5px] border-[#f0ede8] rounded-2xl p-8 relative overflow-hidden"
    >
      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange-500 rounded-t-2xl" />

      {/* icon */}
      <div className="w-12 h-12 rounded-[14px] bg-orange-50 flex items-center justify-center mb-4">
        <Icon size={22} color="#f97316" strokeWidth={1.8} />
      </div>

      <h3 className="text-xl font-extrabold text-[#111] mb-2.5 tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
        {title}
      </h3>

      <p className="text-[13.5px] text-[#777] leading-[1.75] mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
        {desc}
      </p>

      <div className="flex flex-col gap-3">
        {points.map(({ Icon: PIcon, text }, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <PIcon size={14} color="#f97316" strokeWidth={2} />
            </div>
            <span className="text-[13px] text-[#555] leading-relaxed" style={{ fontFamily: "'Sora', sans-serif" }}>
              {text}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────
const AboutSection = () => {
  const aboutRef = useRef(null);
  const vmRef    = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" });
  const vmInView    = useInView(vmRef,    { once: true, margin: "-60px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: aboutInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Lora:ital@1&display=swap"
        rel="stylesheet"
      />

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section
      id="about"
        ref={aboutRef}
        className="bg-white py-10 md:py-20 px-5 overflow-hidden"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <div className="max-w-[1080px] mx-auto">
          <div className="grid gap-16 items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>

            {/* LEFT */}
            <div>
              <motion.div {...fadeUp(0)}>
                <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
                  <span className="text-[11px] font-bold text-orange-700 tracking-widest">WHO WE ARE</span>
                </div>
              </motion.div>

              <motion.h2
                {...fadeUp(0.08)}
                className="text-[clamp(28px,4vw,44px)] font-extrabold text-[#111] leading-[1.13] tracking-tight mb-4"
              >
                Shaping Careers,<br />
                <span className="text-orange-500">One Skill</span> at a Time.
              </motion.h2>

              <motion.p
                {...fadeUp(0.13)}
                className="text-[15px] text-[#888] leading-[1.65] border-l-[2.5px] border-orange-500 pl-3.5 mb-6 italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                "We don't just teach — we build professionals who are ready from day one."
              </motion.p>

              <motion.p
                {...fadeUp(0.18)}
                className="text-sm text-[#555] leading-[1.85] mb-8"
              >
                Founded with a single mission — to bridge the gap between education
                and industry — our institute has trained thousands of students across
                India in cutting-edge tech and digital skills. Every program is built
                around real projects, live mentorship, and placement support that
                actually works.
              </motion.p>

              <motion.div
                {...fadeUp(0.24)}
                className="grid grid-cols-3 gap-3.5 mb-8"
              >
                {stats.map((s) => (
                  <StatCard key={s.id} {...s} started={aboutInView} />
                ))}
              </motion.div>

              <motion.div {...fadeUp(0.3)} className="flex gap-3 flex-wrap">
                <motion.button
                 onClick={() => scrollToSection("contact")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-orange-500 text-white border-none rounded-[9px] px-7 py-3 text-[13.5px] font-bold cursor-pointer"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Our Story →
                </motion.button>
                <motion.button
                 onClick={() => scrollToSection("contact")}
                  whileHover={{ scale: 1.03, backgroundColor: "#fff3e8" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-transparent text-orange-500 border-[1.5px] border-orange-500 rounded-[9px] px-7 py-3 text-[13.5px] font-bold cursor-pointer transition-colors duration-200"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Meet the Team
                </motion.button>
              </motion.div>

              <motion.div
                {...fadeUp(0.36)}
                className="flex gap-5 flex-wrap mt-8 pt-6 border-t border-[#f0ede8]"
              >
                {trust.map(({ Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-xs text-[#666] font-medium"
                  >
                    <div className="w-[30px] h-[30px] rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} color="#f97316" strokeWidth={1.8} />
                    </div>
                    {text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute w-[180px] h-[180px] rounded-full bg-orange-50 -top-10 -right-10 z-0" />
              <div className="absolute w-[90px] h-[90px] rounded-full bg-orange-50 bottom-7 -left-7 z-0" />

              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] z-10">
                {/*
                  Replace with your image:
                  <img src="/institute-photo.jpg" alt="About our institute" className="w-full h-full object-cover block" />
                */}
                <img
                  src="https://res.cloudinary.com/dinknhjnp/image/upload/v1779446950/IMG-20251030-WA0013_su4xyo.jpg"
                  alt="About our institute"
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Floating card — top left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.45, duration: 0.4, ease: "backOut" }}
                className="absolute -top-[18px] -left-6 bg-white border border-[#f0ede8] rounded-2xl px-4 py-3 shadow-[0_8px_28px_rgba(0,0,0,0.09)] z-20"
              >
                <div className="text-[10px] text-[#aaa] font-semibold tracking-wider mb-1.5 uppercase">
                  Student Rating
                </div>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} color="#f97316" fill="#f97316" />
                  ))}
                  <span className="text-xl font-extrabold text-[#111] ml-1">4.9</span>
                </div>
                <div className="text-[10.5px] text-[#888] mt-0.5">Based on 200+ reviews</div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ───────────────────────────────── */}
      <section
        ref={vmRef}
        className="bg-[#fafaf9] py-10 md:py-20 px-6 border-t border-[#f0ede8]"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <div className="max-w-[1080px] mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={vmInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
              <span className="text-[11px] font-bold text-orange-700 tracking-widest">WHAT DRIVES US</span>
            </div>

            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold text-[#111] leading-[1.15] tracking-tight mb-3.5">
              Our <span className="text-orange-500">Vision</span> &amp;{" "}
              <span className="text-orange-500">Mission</span>
            </h2>

            <p className="text-[14.5px] text-[#777] max-w-[480px] mx-auto leading-[1.7]">
              We exist to close the gap between classroom learning and real-world careers — with purpose and precision.
            </p>
          </motion.div>

          {/* Two cards */}
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
          >
            <VMCard
              type="vision"
              Icon={Eye}
              title="Our Vision"
              desc="To become India's most trusted institute for technology and digital skills — producing professionals who lead, innovate, and inspire."
              points={visionPoints}
              delay={0.1}
              inView={vmInView}
            />
            <VMCard
              type="mission"
              Icon={Target}
              title="Our Mission"
              desc="To deliver practical, mentor-driven education that empowers every student to confidently step into their dream career from day one."
              points={missionPoints}
              delay={0.22}
              inView={vmInView}
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutSection;