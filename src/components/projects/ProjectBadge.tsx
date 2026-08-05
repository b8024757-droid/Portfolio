interface ProjectBadgeProps {
  name: string;
}

export default function ProjectBadge({ name }: ProjectBadgeProps) {
  return (
    <span
      className="
        px-3
        py-1
        rounded-full
        text-sm
        font-medium
        bg-blue-500/10
        text-blue-400
        border
        border-blue-500/20
        hover:bg-blue-500
        hover:text-white
        transition-all
        duration-300
      "
    >
      {name}
    </span>
  );
}