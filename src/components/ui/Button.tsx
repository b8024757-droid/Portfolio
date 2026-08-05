import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30",

    secondary:
      "border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        inline-flex
        items-center
	justify-center
	gap-3
	rounded-2xl
	px-8
	py-4
	font-semibold
	transition-all
	duration-300
	${styles[variant]}
	${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}