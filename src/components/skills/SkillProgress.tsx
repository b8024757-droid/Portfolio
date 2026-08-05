import { motion } from "framer-motion";

interface Props {
  skill: string;
  value: number;
}

export default function SkillProgress({ skill, value }: Props) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span>{skill}</span>
        <span>{value}%</span>
      </div>

      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
        />
      </div>
    </div>
  );
}