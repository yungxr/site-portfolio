import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <header className="space-y-6">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Portfolio
      </h1>

      <p className="text-lg md:text-xl font-bold">
        CG Artist · Tech Enthusiast
      </p>

      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
        Создаю визуальные концепты, motion и 3D-решения для музыки и брендов.
      </p>
      <SocialLinks />
    </header>
  );
}