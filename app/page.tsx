import BackgroundBlobs from "./components/BackgroundBlobs";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import SkillsGrid from "./components/SkillsGrid";
import WorksGrid from "./components/WorksGrid";

export default function Home() {
  return (
    <>
      <div className="min-h-screen app-bg relative overflow-hidden">
        <BackgroundBlobs />

        <div className="container container-max mx-auto px-6 py-20">
          <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-10">
              <Header />
              <div className="liquid-glass dark:liquid-glass-dark p-6 rounded-2xl">
                <InfoSection />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <section className="space-y-6">
                <SkillsGrid />
              </section>

              <section>
                <WorksGrid />
              </section>
            </div>
          </main>

          <footer className="mt-20 text-center text-sm text-gray-600 dark:text-gray-400">
            © 2025 Portfolio.
          </footer>
        </div>
      </div>
    </>
  );
}