import { motion } from "framer-motion";
import { ArrowUp, Heart, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020817]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-white">
            Balaji
            <span className="text-cyan-400">.P</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Full Stack Developer • AI Enthusiast • Software Engineer
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Mail size={18} />
            b80247@gmail.com
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            Chennai, India
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="https://github.com/b8024757-droid"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl text-white transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/balaji-p-3242b9326"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl text-white transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/that.short.guyyyy"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl text-white transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Balaji P. • Built with{" "}
            <Heart
              size={14}
              className="inline text-red-500"
            />{" "}
            using React, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>
    </footer>
  );
}