"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

import {
  Globe,
  Database,
  Code2,
  Smartphone,
  Brain,
  BarChart3,
  Megaphone,
  Workflow,
  Server,
  MonitorSmartphone,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Languages,
  PanelsTopLeft,
  PencilRuler,
  Palette,
  Cloud,
  GitBranchPlus,
  Shield,
} from "lucide-react";
import scrollToSection from "@/components/layout/ScrollToSection";

const courses = [
  {
    id: 1,
    title: "MERN Stack Development",
    tag: "Web",
    level: "Beginner → Pro",
    desc: "MongoDB, Express, React & Node.js with real-world projects.",
    icon: Globe,
    highlight: true,
  },
  {
    id: 2,
    title: "Frontend Development",
    tag: "Web",
    level: "Beginner",
    desc: "HTML, CSS, JavaScript, React and responsive UI development.",
    icon: MonitorSmartphone,
  },
  {
    id: 3,
    title: "Backend Development",
    tag: "Web",
    level: "Intermediate",
    desc: "Node.js, Express APIs, authentication and databases.",
    icon: Server,
  },
  {
    id: 4,
    title: "React Native App Development",
    tag: "App",
    level: "Intermediate",
    desc: "Build Android & iOS apps using React Native.",
    icon: Smartphone,
    highlight: true,
  },
  {
    id: 5,
    title: "Java Programming",
    tag: "Programming",
    level: "Beginner",
    desc: "Core Java, OOP concepts and advanced Java development.",
    icon: Code2,
  },
  {
    id: 6,
    title: "Python Development",
    tag: "Programming",
    level: "Beginner",
    desc: "Python fundamentals, automation and backend development.",
    icon: Cpu,
  },
  {
    id: 7,
    title: "Data Science",
    tag: "Data",
    level: "Intermediate",
    desc: "Machine learning, Pandas, NumPy and real datasets.",
    icon: Brain,
  },
  {
    id: 8,
    title: "Data Analytics",
    tag: "Data",
    level: "Beginner",
    desc: "Excel, SQL, Power BI and analytics dashboards.",
    icon: BarChart3,
  },
  {
    id: 9,
    title: "Digital Marketing",
    tag: "Marketing",
    level: "Beginner",
    desc: "SEO, Meta Ads, Google Ads and content strategy.",
    icon: Megaphone,
  },
  {
    id: 10,
    title: "N8N Automation",
    tag: "Automation",
    level: "Beginner",
    desc: "No-code workflows and AI automation systems.",
    icon: Workflow,
  },
  {
    id: 11,
    title: "Database Management",
    tag: "Programming",
    level: "Intermediate",
    desc: "MySQL, MongoDB and database architecture concepts.",
    icon: Database,
  },
  {
    id: 12,
    title: "Cyber Security",
    tag: "Security",
    level: "Intermediate",
    desc: "Network security, ethical hacking and cyber fundamentals.",
    icon: ShieldCheck,
  },
  {
    id: 13,
    title: "AI & Machine Learning",
    tag: "AI",
    level: "Intermediate",
    desc: "Learn AI models, machine learning and real AI projects.",
    icon: BrainCircuit,
    highlight: true,
  },
  {
    id: 14,
    title: "Spoken English",
    tag: "Language",
    level: "Beginner",
    desc: "Improve communication, fluency and interview speaking skills.",
    icon: Languages,
  },
  {
    id: 15,
    title: "Angular JS Development",
    tag: "Web",
    level: "Intermediate",
    desc: "Build scalable web applications using Angular framework.",
    icon: PanelsTopLeft,
  },
  {
    id: 16,
    title: "UI/UX Design",
    tag: "Design",
    level: "Beginner",
    desc: "Learn Figma, wireframing and modern UI design systems.",
    icon: PencilRuler,
  },
  {
    id: 17,
    title: "Graphic Design",
    tag: "Design",
    level: "Beginner",
    desc: "Photoshop, Illustrator, branding and creative design.",
    icon: Palette,
  },
  {
    id: 18,
    title: "Cloud Computing",
    tag: "Cloud",
    level: "Intermediate",
    desc: "AWS, cloud infrastructure and deployment.",
    icon: Cloud,
  },
  {
    id: 19,
    title: "DevOps",
    tag: "Cloud",
    level: "Advanced",
    desc: "Docker, Kubernetes and CI/CD workflows.",
    icon: GitBranchPlus,
  },
  {
    id: 20,
    title: "Ethical Hacking",
    tag: "Security",
    level: "Intermediate",
    desc: "Penetration testing and cybersecurity tools.",
    icon: Shield,
  },
];

const filters = [
  "All",
  "Web",
  "App",
  "Programming",
  "Data",
  "Marketing",
  "Automation",
  "Security",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
    },
  }),
};

function CourseCard({ course, index }) {
  const Icon = course.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -8 }}
      className={`relative bg-white border rounded-xl p-6 transition-all duration-300 overflow-hidden group
      ${
        course.highlight
          ? "border-orange-200 shadow-xl shadow-orange-100"
          : "border-gray-100 shadow-md hover:shadow-xl"
      }`}
    >
      {course.highlight && (
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
          Popular
        </div>
      )}

      <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-all duration-300">
        <Icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-all duration-300" />
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span className="bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
          {course.tag}
        </span>

        <span className="text-xs text-gray-500 font-medium">
          {course.level}
        </span>
      </div>

      <h3 className="text-lg font-bold line-clamp-1 text-black leading-snug mb-3">
        {course.title}
      </h3>

      <p className="text-sm text-gray-600 leading-7 mb-6">
        {course.desc}
      </p>

      <motion.button
       onClick={() => scrollToSection("contact")}
        whileTap={{ scale: 0.96 }}
        className="w-full bg-white border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-3 rounded-lg text-sm font-semibold transition-all duration-300"
      >
        Explore Course
      </motion.button>
    </motion.div>
  );
}

const ExploreCourses = () => {
  const [active, setActive] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });

  const filtered =
    active === "All"
      ? courses
      : courses.filter((c) => c.tag === active);

  const visibleCourses = showAll
    ? filtered
    : filtered.slice(0, 12);

  return (
    <section
    id="courses"
      ref={sectionRef}
      className="bg-white py-10 md:py-20 px-5"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>

            <span className="text-xs font-semibold tracking-wide text-orange-600">
              INDUSTRY READY COURSES
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Explore Our{" "}
            <span className="text-orange-500">
              Courses
            </span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-5 leading-7">
            Learn practical skills with real-world projects and
            industry-focused training programs.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActive(filter);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
              ${
                active === filter
                  ? "bg-orange-500 text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleCourses.map((course, i) => (
              <CourseCard
                key={course.id}
                course={course}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More */}
        {filtered.length > 12 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:scale-105"
            >
              {showAll ? "Show Less" : "See More Courses"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreCourses;