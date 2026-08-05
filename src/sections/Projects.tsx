import { motion } from "framer-motion";

import FeaturedProject from "../components/projects/FeaturedProject";
import ProjectCard from "../components/projects/ProjectCard";

import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.find((project) => project.featured);

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            A collection of AI, enterprise, and full-stack applications
            showcasing my experience in modern software development,
            problem-solving, and scalable application design.
          </p>
        </motion.div>

        {/* Featured Project */}

        {featured && (
          <FeaturedProject
            title={featured.title}
            description={featured.description}
            techStack={featured.techStack}
            features={featured.features}
            github={featured.github}
            live={featured.live}
          />
        )}

        {/* Other Projects */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              features={project.features}
              github={project.github}
              live={project.live}
            />
          ))}

        </div>

      </div>
    </section>
  );
}