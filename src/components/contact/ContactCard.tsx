import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

export default function ContactCard({
  icon,
  title,
  value,
  href,
}: ContactCardProps) {
  const content = (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-white/5
        to-cyan-500/5
        backdrop-blur-xl
        p-6
        hover:border-cyan-500/40
        hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]
        transition-all
        duration-300
      "
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-cyan-500/10 p-4 text-cyan-400">
            {icon}
          </div>

          <div>
            <h3 className="text-white font-semibold">
              {title}
            </h3>

            <p className="text-gray-400 text-sm mt-1 break-all">
              {value}
            </p>
          </div>

        </div>

        <ArrowUpRight
          size={20}
          className="text-cyan-400 opacity-0 group-hover:opacity-100 transition"
        />

      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
}