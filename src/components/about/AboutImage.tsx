import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <div className="relative">

        {/* Blue Glow */}
        <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full scale-110"></div>

        {/* Image */}
        <img
          src="/images/profile.png"
          alt="Balaji"
          className="relative w-[420px] rounded-3xl border-4 border-blue-500 shadow-2xl"
        />

      </div>
    </motion.div>
  );
}