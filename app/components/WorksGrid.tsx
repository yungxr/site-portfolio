"use client";

import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Work {
  type: "video" | "image";
  src: string;
  title: string;
  year?: number;
}

const MODAL_BREAKPOINTS = {
  mobile: "max-h-[70vh]",
  desktop: "max-w-4xl",
} as const;

export default function WorksGrid() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const works: Work[] = [
    {
      type: "video",
      src: "https://i.imgur.com/yP2gpPH.mp4",
      title: "x6x6x6",
      year: 2025,
    },
    {
      type: "video",
      src: "https://i.imgur.com/dbziRIJ.mp4",
      title: "Платина",
      year: 2025,
    },
    {
      type: "video",
      src: "https://i.imgur.com/jaau3bh.mp4",
      title: "Платина",
      year: 2025,
    },
    {
      type: "video",
      src: "https://i.imgur.com/mzm8Toi.mp4",
      title: "Houdini test",
      year: 2025,
    },
    {
      type: "video",
      src: "https://i.imgur.com/fpLqVou.mp4",
      title: "Платина",
      year: 2025,
    },
    { type: "image", src: "/images/about3.png", title: "Работа 1", year: 2025 },
    { type: "image", src: "/images/about3.png", title: "Работа 2", year: 2025  },
  ];

  const openModal = (work: Work, index: number) => {
    setSelectedWork(work);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  const navigate = (direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % works.length
        : (currentIndex - 1 + works.length) % works.length;

    setCurrentIndex(newIndex);
    setSelectedWork(works[newIndex]);
  };

  useEffect(() => {
    if (!selectedWork) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowRight":
          navigate("next");
          break;
        case "ArrowLeft":
          navigate("prev");
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedWork]);

  const WorkThumbnail = ({ work, index }: { work: Work; index: number }) => (
    <article
      className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft-lg cursor-pointer"
      onClick={() => openModal(work, index)}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        {work.type === "video" ? (
          <video
            className="w-full h-full object-cover"
            src={work.src}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            className="w-full h-full object-cover"
            src={work.src}
            alt={work.title}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 flex items-end p-4 opacity-0 hover:opacity-95 transition-all duration-500">
        <div className="w-full rounded-xl p-3 backdrop-blur-sm bg-black/30 border border-white/10">
          <div className="text-sm text-center font-medium text-white">
            {work.title}
          </div>
          <div className="text-xs text-center text-gray-300 mt-1">
            Project • {work.year}
          </div>
        </div>
      </div>
    </article>
  );

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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border border-white/30 text-gray-100 hover:border-white/80 hover:text-white will-change-transform hover:-translate-y-0.5 shadow-soft-lg"
        >
          Больше в Instagram
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <WorkThumbnail
            key={`${work.title}-${index}`}
            work={work}
            index={index}
          />
        ))}
      </div>

      {selectedWork && (
        <Modal
          work={selectedWork}
          currentIndex={currentIndex}
          totalWorks={works.length}
          onClose={closeModal}
          onNavigate={navigate}
        />
      )}
    </section>
  );
}

function Modal({
  work,
  currentIndex,
  totalWorks,
  onClose,
  onNavigate,
}: {
  work: Work;
  currentIndex: number;
  totalWorks: number;
  onClose: () => void;
  onNavigate: (direction: "next" | "prev") => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-20 p-3 text-white hover:bg-white/10 rounded-full transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {totalWorks > 1 && (
          <>
            <button
              onClick={() => onNavigate("prev")}
              className="absolute left-4 z-20 p-3 text-white hover:bg-white/10 rounded-full md:left-8"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={() => onNavigate("next")}
              className="absolute right-4 z-20 p-3 text-white hover:bg-white/10 rounded-full md:right-8"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </>
        )}

        <div className="bg-black/90 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          {work.type === "video" ? (
            <video
              className="w-full h-auto max-h-[70vh] object-contain"
              src={work.src}
              autoPlay
              loop
              controls
            />
          ) : (
            <img
              className="w-full h-auto max-h-[70vh] object-contain"
              src={work.src}
              alt={work.title}
            />
          )}

          <div className="p-6 bg-black/90 backdrop-blur-sm border-b border-white/10">
            <h3 className="text-xl font-bold text-white text-center">
              {work.title}
            </h3>
            <p className="text-gray-400 mt-2 text-center">
              Project • {work.year} • {currentIndex + 1} / {totalWorks}
            </p>
          </div>
        </div>

        {totalWorks > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 md:hidden">
            {Array.from({ length: totalWorks }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
