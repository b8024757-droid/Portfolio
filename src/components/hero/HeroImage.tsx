import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="relative flex flex-1 items-center justify-center">

      {/* Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl" />

      {/* Animated Image */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        {/* Animated Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-500/40 animate-pulse" />

        <img
          src="/images/profile.png"
          alt="Balaji"
          className="
            h-[400px]
            w-[400px]
            rounded-full
            object-cover
            border-4
            border-blue-500
            shadow-[0_0_80px_rgba(59,130,246,.45)]
          "
        />

        {/* Status Badge */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-8
            right-4
            rounded-full
            bg-emerald-500
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            shadow-lg
          "
        >
          🟢 Available for Hire
        </motion.div>
      </motion.div>
    </div>
  );
}