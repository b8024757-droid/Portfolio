import CountUp from "react-countup";

export default function HeroStats() {
  return (
    <div className="mt-14 flex flex-wrap gap-10">
      <div>
        <h3 className="text-4xl font-bold text-blue-400">
          <CountUp end={10} duration={2} />+
        </h3>
        <p className="text-slate-400">Projects</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-400">
          <CountUp end={10} duration={2} />+
        </h3>
        <p className="text-slate-400">Technologies</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-400">
          <CountUp
            end={2026}
            duration={2}
            separator=""
          />
        </h3>
        <p className="text-slate-400">Graduate</p>
      </div>
    </div>
  );
}
