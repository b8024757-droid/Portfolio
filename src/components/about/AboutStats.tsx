import { motion } from "framer-motion";

const stats = [
  {
    icon: "💼",
    number: "15+",
    label: "Projects Completed",
  },
  {
    icon: "🛠️",
    number: "10+",
    label: "Technologies",
  },
  {
    icon: "🎓",
    number: "2026",
    label: "Graduation",
  },
  {
    icon: "🤖",
    number: "AI",
    label: "Full Stack Focus",
  },
];

export default function AboutStats() {
  return (
    <div className="grid md:grid-cols-4 gap-6 mt-20">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8, scale: 1.04 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-blue-500"
        >
          <div className="text-4xl mb-4">{item.icon}</div>

          <h2 className="text-5xl font-bold text-blue-400">
            {item.number}
          </h2>

          <p className="mt-3 text-gray-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}