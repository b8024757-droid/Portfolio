import AboutImage from "../components/about/AboutImage";
import AboutContent from "../components/about/AboutContent";
import AboutCards from "../components/about/AboutCards";
import AboutStats from "../components/about/AboutStats";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-[#020817] via-[#07111f] to-[#020817] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold tracking-widest uppercase">
            Who I Am
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-6 leading-tight">
            Building Intelligent Software
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              with Modern Technologies
            </span>
          </h2>

          <div className="w-32 h-1 rounded-full mx-auto mt-8 bg-gradient-to-r from-blue-500 to-cyan-400" />

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-400 leading-8">
            Passionate about creating scalable web applications,
            AI-powered solutions, and enterprise software that solve
            real-world problems with clean architecture and exceptional
            user experiences.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <AboutImage />

          <div>

            <AboutContent />

            <div className="mt-10">
              <AboutCards />
            </div>

          </div>

        </div>

        <div className="mt-28">
          <AboutStats />
        </div>

      </div>
    </section>
  );
}