import { motion } from "framer-motion";
import {
  Star,
  Quote,
} from "lucide-react";

const stats = [
  { value: "4.9★", label: "Average Rating" },
  { value: "1200+", label: "Students Trained" },
  { value: "95%", label: "Placement Support" },
  { value: "50+", label: "Live Projects" },
];

const row1 = [
  {
    initials: "AK",
    name: "Aman Khan",
    role: "MERN Stack Student",
    text: "Honestly bolu to coding ka C bhi nahi aata tha 😅 but ThreeSyntax me practical way me samjhaya. Ab khud ka fullstack project bana liya.",
  },
  {
    initials: "RJ",
    name: "Riya Jain",
    role: "React Native Student",
    text: "Sabse best part ye laga ki yaha sirf theory nahi hoti. Har concept ke baad real project banwaya jata he.",
  },
  {
    initials: "VP",
    name: "Vivek Patel",
    role: "Backend Developer",
    text: "Placement preparation aur interview guidance kaafi helpful thi. Confidence kaafi improve hua after joining.",
  },
  {
    initials: "SM",
    name: "Sahil Malviya",
    role: "Frontend Student",
    text: "UI design se lekar React tak sab clear ho gaya. Mentors friendly he aur doubt support bhi fast milta he.",
  },
  {
    initials: "NK",
    name: "Nikhil Kumar",
    role: "Automation Student",
    text: "N8N automation course next level tha 🔥 Ab freelance projects lena start kar diya he.",
  },
];

const row2 = [
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Python Student",
    text: "Non IT background se hu but yaha learning ka style beginner friendly he. Ab Python comfortably kar leti hu.",
  },
  {
    initials: "DK",
    name: "Deepak Kumar",
    role: "MERN Stack Student",
    text: "Live projects aur portfolio guidance ki wajah se internship crack kar paya. Overall experience mast tha.",
  },
  {
    initials: "AR",
    name: "Ayush Raj",
    role: "Digital Marketing Student",
    text: "Digital marketing practical campaigns ke sath sikhaya gaya. Real ads chalake samjhaya gaya tha.",
  },
  {
    initials: "RT",
    name: "Ritika Tiwari",
    role: "UI/UX Student",
    text: "Design section bahot achha tha. Figma properly samajh aya aur ab client work bhi kar rahi hu.",
  },
  {
    initials: "HV",
    name: "Harsh Verma",
    role: "Java Student",
    text: "Java ka logic building part bahot easy way me samjhaya. Faculty support genuinely achha tha.",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-orange-400 text-orange-400"
        />
      ))}
    </div>
  );
}

function Avatar({ initials }) {
  return (
    <div
      className="
        w-11 h-11
        rounded-full
        bg-orange-500
        flex items-center justify-center
        shrink-0
      "
    >
      <span className="text-white text-sm font-bold">
        {initials}
      </span>
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div
      className="
        w-[300px]
        sm:w-[340px]
        shrink-0
        bg-white
        border border-orange-100
        rounded-2xl
        p-5
        flex flex-col
        gap-4
        hover:shadow-xl
        transition-all duration-300
      "
    >
      {/* Top */}
      <div className="flex items-center justify-between">
        <StarRow />

        <Quote className="w-5 h-5 text-orange-200" />
      </div>

      {/* Review */}
      <p
        className="
          text-gray-600
          text-sm
          leading-7
        "
      >
        {item.text}
      </p>

      {/* Bottom */}
      <div
        className="
          flex items-center gap-3
          pt-4
          border-t border-orange-100
          mt-auto
        "
      >
        <Avatar initials={item.initials} />

        <div>
          <p className="text-black text-sm font-semibold">
            {item.name}
          </p>

          <p className="text-gray-500 text-xs">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 35,
}) {
  const doubled = [...items, ...items];

  const animateX =
    direction === "left"
      ? ["0%", "-50%"]
      : ["-50%", "0%"];

  return (
    <div className="w-full overflow-hidden relative">

      <motion.div
        className="flex w-max gap-5"
        animate={{ x: animateX }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="
        bg-white
        py-20
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>

            <span className="text-xs font-semibold tracking-wide text-orange-600">
              STUDENT REVIEWS
            </span>
          </div>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-black
              leading-tight
            "
          >
            What Our{" "}

            <span className="text-orange-500">
              Students Say
            </span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-5 leading-7">
            Real feedback from students who learned practical skills,
            built projects and started their tech journey with us.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="
            grid
            grid-cols-2
            sm:grid-cols-4
            gap-4
            mb-14
          "
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="
                bg-orange-50
                border border-orange-100
                rounded-2xl
                px-5
                py-6
                text-center
              "
            >
              <p
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-orange-500
                "
              >
                {s.value}
              </p>

              <p
                className="
                  text-gray-600
                  text-sm
                  mt-2
                "
              >
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="w-full flex items-center justify-center">

        <div
          className="
            flex flex-col
            max-w-7xl
            overflow-hidden
            gap-5
          "
        >
          {/* Row 1 */}
          <MarqueeRow
            items={row1}
            direction="left"
            speed={40}
          />

          {/* Row 2 */}
          <MarqueeRow
            items={row2}
            direction="right"
            speed={38}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;