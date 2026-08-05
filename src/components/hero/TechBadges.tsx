const tech = [
  "Java",
  "Spring Boot",
  "React",
  "Node.js",
  "TypeScript",
  "MongoDB",
];

export default function TechBadges() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {tech.map((item) => (
        <span
          key={item}
          className="
            rounded-full
            border
            border-blue-500/20
            bg-white/5
            px-4
            py-2
            text-sm
            text-slate-300
            backdrop-blur-md
          "
        >
          {item}
        </span>
      ))}
    </div>
  );
}