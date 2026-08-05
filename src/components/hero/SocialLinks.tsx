import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="mt-10 flex items-center gap-6">
      <a
        href="https://github.com/b8024757-droid"
        target="_blank"
        rel="noreferrer"
        className="transition hover:scale-110 hover:text-blue-400"
      >
        <FaGithub size={24} />
      </a>

      <a
        href="https://www.linkedin.com/in/balaji-p-3242b9326"
        target="_blank"
        rel="noreferrer"
        className="transition hover:scale-110 hover:text-blue-400"
      >
        <FaLinkedin size={24} />
      </a>

      <a
        href="mailto:your-email@example.com"
        className="transition hover:scale-110 hover:text-blue-400"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
}