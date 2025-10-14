import { MessageCircle, Youtube, Instagram, Globe } from "lucide-react";

export default function SocialLinks() {
  const socialLinks = [
    {
      href: "https://t.me/speeshspeesh",
      icon: MessageCircle,
      label: "Telegram",
      hoverColor: "group-hover:text-speeshBlue",
    },
    {
      href: "https://youtube.com/@w36lord",
      icon: Youtube,
      label: "YouTube",
      hoverColor: "group-hover:text-red-500",
    },
    {
      href: "https://instagram.com/speeshspeesh",
      icon: Instagram,
      label: "Instagram",
      hoverColor: "group-hover:text-pink-500",
      hasAsterisk: true,
    },
    {
      href: "https://rbdclan.moscow/speesh",
      icon: Globe,
      label: "RBDClan",
      hoverColor: "group-hover:text-green-500",
    },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((l) => {
        const Icon = l.icon;
        return (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className={`group relative inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all text-gray-700 dark:text-gray-300`}
            title={l.label}
          >
            <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
          </a>
        );
      })}
    </div>
  );
}