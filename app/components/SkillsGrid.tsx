import { Palette, Code, Video, Zap } from "lucide-react";

export default function SkillsGrid() {
  const skills = [
    {
      icon: Palette,
      title: "CG Artist",
      description: "Cinema 4D, Photoshop, Houdini — Octane / Redshift.",
    },
    {
      icon: Code,
      title: "Tech Enthusiast",
      description: "Инфраструктура, пайплайны, быстрые прототипы.",
    },
    {
      icon: Video,
      title: "Content Creator",
      description: "Монтаж, режиссура, motion-design.",
    },
    {
      icon: Zap,
      title: "Art Direction",
      description: "Концепты, визуальная стратегия, коллаборации.",
    },
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-100 tracking-tight">
        Навыки
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {skills.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className={`group p-6 rounded-2xl border border-white/20 transition-all duration-300 will-change-transform shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-1`}
            >
              <div className="flex flex-col items-start gap-3">
                <Icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-gray-100 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {s.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}