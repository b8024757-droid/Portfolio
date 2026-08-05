import { Menu, Download } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="
      fixed
      top-2
      left-1/2
      -translate-x-1/2
      z-50
      w-[95%]
      max-w-7xl
      rounded-2xl
      border
      border-white/10
      bg-black/40
      backdrop-blur-2xl
      shadow-[0_10px_50px_rgba(0,0,0,0.35)]
      "
    >
      <div className="flex h-20 items-center justify-between px-8">

        {/* Logo */}

        <a
          href="#"
          className="text-2xl font-extrabold tracking-wide text-white"
        >
          Balaji
          <span className="text-cyan-400">.P</span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 md:flex">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                relative
                text-gray-300
                font-medium
                transition
                hover:text-cyan-400
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-cyan-400
                after:transition-all
                hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Resume Button */}

        <div className="hidden md:flex">

          <a
            href="/Balaji_Resume.pdf"
            target="_blank"
            className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-5
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-lg
            "
          >
            <Download size={18} />

            Resume
          </a>

        </div>

        {/* Mobile */}

        <button
          className="
          rounded-xl
          border
          border-white/10
          p-3
          transition
          hover:bg-white/10
          md:hidden
          "
        >
          <Menu size={22} />
        </button>

      </div>
    </motion.header>
  );
}