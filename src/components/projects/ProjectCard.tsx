import {
  ExternalLink,
  GitBranch,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import ProjectBadge from "./ProjectBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github: string;
  live: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  features,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-7
      flex
      flex-col
      justify-between
      hover:border-cyan-500/50
      transition-all
      duration-500
      shadow-lg
      hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]
      "
    >
      {/* Accent Line */}

      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />

      <div>
        <span className="text-cyan-400 text-sm font-bold tracking-[0.3em]">
          PROJECT
        </span>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          {description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-6">
          {techStack.map((tech) => (
            <ProjectBadge
              key={tech}
              name={tech}
            />
          ))}
        </div>

        {/* Features */}

        <div className="mt-7 space-y-3">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-gray-300"
            >
              <CheckCircle2
                size={18}
                className="text-cyan-400"
              />

              {feature}
            </div>
          ))}

        </div>
      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-10">

        {live ? (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={live}
            target="_blank"
            rel="noreferrer"
            className="
            flex-1
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            py-3
            flex
            items-center
            justify-center
            gap-2
            font-semibold
            transition-all
            duration-300
            "
          >
            <ExternalLink size={18} />

            Live Demo
          </motion.a>
        ) : (
          <div
            className="
            flex-1
            rounded-xl
            border
            border-yellow-500/40
            bg-yellow-500/10
            py-3
            text-center
            text-yellow-300
            font-semibold
            "
          >
            Coming Soon
          </div>
        )}

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={github || "#"}
          target="_blank"
          rel="noreferrer"
          className="
          flex-1
          rounded-xl
          border
          border-white/10
          py-3
          flex
          items-center
          justify-center
          gap-2
          font-semibold
          hover:border-cyan-500
          hover:bg-cyan-500/10
          transition-all
          duration-300
          "
        >
          <GitBranch size={18} />

          GitHub

          <ArrowRight
            size={16}
            className="opacity-0 group-hover:opacity-100 transition"
          />
        </motion.a>

      </div>
    </motion.div>
  );
}