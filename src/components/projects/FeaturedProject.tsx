import { ExternalLink, GitBranch, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ProjectBadge from "./ProjectBadge";

interface FeaturedProjectProps {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github: string;
  live: string;
}

export default function FeaturedProject({
  title,
  description,
  techStack,
  features,
  github,
  live,
}: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.01 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/40
        bg-gradient-to-br
        from-blue-500/10
        via-slate-900/60
        to-slate-950
        backdrop-blur-xl
        p-10
        shadow-[0_0_60px_rgba(59,130,246,0.25)]
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Featured Badge */}
      <div className="relative inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400 font-semibold">
        <Sparkles size={18} />
        ⭐ Featured Project
      </div>

      {/* Title */}
      <div className="relative mt-8">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          {title}
        </h2>

        <p className="mt-3 text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
          Enterprise GenAI Recruitment Copilot
        </p>
      </div>

      {/* Description */}
      <p className="relative mt-8 max-w-5xl text-xl leading-9 text-gray-300">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="relative flex flex-wrap gap-3 mt-10">
        {techStack.map((tech) => (
          <ProjectBadge key={tech} name={tech} />
        ))}
      </div>

      {/* Features */}
      <div className="relative grid md:grid-cols-2 gap-5 mt-12">
        {features.map((feature) => (
          <motion.div
            key={feature}
            whileHover={{ scale: 1.03 }}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              px-6
              py-5
              transition-all
              hover:border-cyan-500/40
              hover:bg-cyan-500/10
            "
          >
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-xl font-bold">✓</span>

              <span className="text-gray-200">
                {feature}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="relative flex flex-wrap gap-5 mt-12">

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href={live}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-8
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            shadow-lg
          "
        >
          <ExternalLink size={20} />

          Live Demo
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href={github}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-8
            py-4
            font-semibold
            text-white
            hover:border-cyan-500
            hover:bg-cyan-500/10
            transition-all
            duration-300
          "
        >
          <GitBranch size={20} />

          GitHub
        </motion.a>

      </div>
    </motion.div>
  );
}