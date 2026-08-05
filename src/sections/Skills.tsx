import SkillCategory from "../components/skills/SkillCategory";
import SkillCard from "../components/skills/SkillCard";
import SkillProgress from "../components/skills/SkillProgress";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-[#030712] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold tracking-widest uppercase">
            My Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I build scalable full-stack applications using modern technologies,
            clean architecture, and AI-powered solutions.
          </p>
        </div>

        <SkillCategory title="Frontend">

          <SkillCard
            name="React"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />

          <SkillCard
            name="HTML5"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />

          <SkillCard
            name="CSS3"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />

          <SkillCard
            name="Tailwind"
            icon="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          />

        </SkillCategory>

        <SkillCategory title="Backend">

          <SkillCard
            name="Java"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          />

          <SkillCard
            name="Spring Boot"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
          />

          <SkillCard
            name="Node.js"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />

          <SkillCard
            name="Express"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          />

        </SkillCategory>

        <SkillCategory title="Database">

          <SkillCard
            name="MySQL"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          />

          <SkillCard
            name="MongoDB"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />

        </SkillCategory>

        <SkillCategory title="Tools">

          <SkillCard
            name="Git"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />

          <SkillCard
            name="Docker"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          />

          <SkillCard
            name="VS Code"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />

          <SkillCard
            name="Postman"
            icon="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
          />

        </SkillCategory>

        <div className="mt-24">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Proficiency
          </h2>

          <div className="max-w-3xl mx-auto">

            <SkillProgress skill="Java" value={95} />

            <SkillProgress skill="Spring Boot" value={90} />

            <SkillProgress skill="React" value={88} />

            <SkillProgress skill="Node.js" value={82} />

            <SkillProgress skill="MySQL" value={90} />

            <SkillProgress skill="MongoDB" value={85} />

          </div>

        </div>

      </div>
    </section>
  );
}