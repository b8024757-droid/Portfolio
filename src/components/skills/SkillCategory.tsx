interface Props {
  title: string;
  children: React.ReactNode;
}

export default function SkillCategory({ title, children }: Props) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-blue-400 mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
}