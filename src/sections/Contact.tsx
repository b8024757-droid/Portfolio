import ContactCard from "../components/contact/ContactCard";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-[#020817] via-[#07111f] to-[#020817]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-6">
            Let's Build Something Amazing 🚀
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto mt-8">
            I'm currently open to Full-Time Software Engineering opportunities,
            AI projects, and exciting collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          <ContactCard
            icon={<Mail size={24} />}
            title="Email"
            value="b80247@gmail.com"
            href="mailto:b80247@gmail.com"
          />

          <ContactCard
            icon={<Phone size={24} />}
            title="Phone"
            value="+91 88258 57729"
            href="tel:+918825857729"
          />

          <ContactCard
            icon={<FaLinkedin size={24} />}
            title="LinkedIn"
            value="linkedin.com/in/balaji-p-3242b9326"
            href="https://www.linkedin.com/in/balaji-p-3242b9326"
          />

          <ContactCard
            icon={<FaGithub size={24} />}
            title="GitHub"
            value="github.com/b8024757-droid"
            href="https://github.com/b8024757-droid"
          />

          <ContactCard
            icon={<FaInstagram size={24} />}
            title="Instagram"
            value="@that.short.guyyyy"
            href="https://www.instagram.com/that.short.guyyyy"
          />

          <ContactCard
            icon={<MapPin size={24} />}
            title="Location"
            value="Chennai, India"
          />

        </div>

        <div className="flex justify-center mt-20">

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="/Balaji_Resume.pdf"
            target="_blank"
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              shadow-lg
            "
          >
            <Download size={22} />
            Download Resume
          </motion.a>

        </div>

      </div>
    </section>
  );
}