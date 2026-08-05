import { motion } from "framer-motion";

const cards = [
  {
    icon: "💻",
    title: "Full Stack Development",
    description:
      "Built 15+ production-ready web applications using Java, Spring Boot, React, Node.js, REST APIs and MySQL.",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    description:
      "Developed AI-powered applications using Gemini AI, RAG, Resume Parsing, NLP and intelligent automation.",
  },
  {
    icon: "🚀",
    title: "Projects & Innovation",
    description:
      "Designed scalable enterprise dashboards, SaaS platforms and full-stack applications focused on performance and user experience.",
  },
  {
    icon: "🎯",
    title: "Career Goal",
    description:
      "Seeking Full Stack Developer opportunities where I can contribute, learn continuously and build impactful software products.",
  },
];

export default function AboutCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -10,
            scale: 1.05,
            boxShadow: "0 0 40px rgba(59,130,246,.35)",
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-br
            from-white/5
            to-blue-500/5
            backdrop-blur-xl
            p-7
            hover:border-blue-500
            cursor-pointer
          "
        >
          <div className="text-5xl mb-5">
            {card.icon}
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            {card.title}
          </h3>

          <p className="text-gray-400 leading-8">
            {card.description}
          </p>
        </motion.div>
      ))}

    </div>
  );
}