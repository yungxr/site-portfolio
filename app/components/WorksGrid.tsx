import { ArrowRight } from "lucide-react";

export default function WorksGrid() {
  const works = [
    { type: "video", src: "https://i.imgur.com/yP2gpPH.mp4", title: "x6x6x6" },
    { type: "video", src: "https://i.imgur.com/dbziRIJ.mp4", title: "Платина" },
    { type: "video", src: "https://i.imgur.com/jaau3bh.mp4", title: "Платина" },
    {
      type: "video",
      src: "https://i.imgur.com/mzm8Toi.mp4",
      title: "Houdini test",
    },
    { type: "video", src: "https://i.imgur.com/fpLqVou.mp4", title: "Платина" },
    { type: "image", src: "/images/about3.png", title: "Работа 1" },
    { type: "image", src: "/images/about3.png", title: "Работа 1" },
    // Здесь ты можешь заменить/изменить/добавить свои работы, просто копируя и вставляя и затем изменяя под свои данные
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-100 tracking-tight">
          Работы
        </h2>

        <a
          href="https://instagram.com/speeshspeesh"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
            border border-white/30 text-gray-100
            hover:border-white/80 hover:text-white
            will-change-transform hover:-translate-y-0.5 shadow-soft-lg"
        >
          Больше в Instagram
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((work, i) => (
          <article
            key={i}
            className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft-lg"
          >
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
              {work.type === "video" ? (
                <video
                  className="card-media"
                  src={work.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img className="card-media" src={work.src} alt={work.title} />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-end p-4 opacity-0 hover:opacity-95 transition-all duration-500">
              <div className="w-full rounded-xl p-3 backdrop-blur-sm bg-black/30 border border-white/10">
                <div className="flex items-center justify-center">
                  <div>
                    <div className="text-sm text-center font-medium text-white">
                      {work.title}
                    </div>
                    <div className="text-xs text-gray-300 mt-1">
                      Project • 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}