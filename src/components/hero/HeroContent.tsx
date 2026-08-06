import { Typewriter } from "react-simple-typewriter";
import { Download, ArrowRight } from "lucide-react";

import Button from "../ui/Button";
import SocialLinks from "./SocialLinks";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="flex-1">
      {/* Greeting */}
      <p className="mb-5 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
        👋 Hello, I'm
      </p>

      {/* Name */}
      <h1 className="mb-5 text-6xl font-black leading-tight lg:text-8xl">
        Balaji P
      </h1>

      {/* Typewriter */}
      <h2 className="mb-8 text-2xl font-medium text-slate-300 lg:text-4xl">
        <Typewriter
          words={[
            "Full Stack Developer",
            "Java Developer",
            "React Developer",
            "Spring Boot Developer",
            "AI Enthusiast",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1800}
        />
      </h2>

      {/* Description */}
      <p className="max-w-xl text-lg leading-8 text-slate-400">
        Passionate Full Stack Developer specializing in Java,
        Spring Boot, React, AI-powered applications, and scalable
        web development.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-5">
        <a href="/Balaji_Resume.pdf" download>
          <Button>
            <Download size={18} />
            <span>Download Resume</span>
          </Button>
        </a>

        <a href="#projects">
          <Button variant="secondary">
            <ArrowRight size={18} />
            <span>View Projects</span>
          </Button>
        </a>
      </div>

      <SocialLinks />

      <HeroStats />
    </div>
  );
}
