import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: string;
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    >
      <img
        src={icon}
        alt={name}
        className="w-14 h-14 object-contain mb-4 group-hover:scale-110 transition"
      />

      <h3 className="text-white font-semibold">{name}</h3>
    </motion.div>
  );
}