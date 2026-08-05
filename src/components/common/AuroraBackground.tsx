import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Blue */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-200px]
          top-[100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/20
          blur-[140px]
        "
      />

      {/* Purple */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-150px]
          top-[250px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-500/20
          blur-[140px]
        "
      />

      {/* Cyan */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-120px]
          left-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/15
          blur-[130px]
        "
      />
    </div>
  );
}