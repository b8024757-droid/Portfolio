import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutContent() {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "REST APIs",
    "Generative AI",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl font-bold text-white">
        Java Full Stack Developer
      </h3>

      <p className="mt-6 text-gray-400 leading-8 text-lg">
        I'm <span className="text-blue-400 font-semibold">Balaji P</span>, a
        passionate Full Stack Developer specializing in Java, Spring Boot,
        React, and AI-powered applications. I enjoy building scalable,
        user-friendly applications while continuously learning modern
        technologies.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3 text-gray-300"
          >
            <CheckCircle
              size={18}
              className="text-blue-400"
            />

            <span>{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}