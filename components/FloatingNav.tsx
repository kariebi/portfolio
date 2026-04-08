"use client";
import {
  Home,
  Building2,
  Github,
  MessageSquare,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function FloatingNav() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div className="pointer-events-auto bg-background border border-foreground/20 rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05)] flex items-center h-14 px-1.5 gap-1">
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-50 dark:hover:bg-foreground/10 transition-colors"
          title="Home"
        >
          <Home size={16} className="text-gray-600 dark:text-gray-400" />
        </a>
        <a
          href="#projects"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-50 dark:hover:bg-foreground/10 transition-colors"
          title="Projects"
        >
          <Building2 size={16} className="text-gray-600 dark:text-gray-400" />
        </a>

        <div className="w-px h-9 bg-foreground/20 mx-1" />

        <a
          href="https://github.com/kariebi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-50 dark:hover:bg-foreground/10 transition-colors"
          title="GitHub"
        >
          <Github size={16} className="text-gray-600 dark:text-gray-400" />
        </a>
        <a
          href="https://linkedin.com/in/kariebi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-50 dark:hover:bg-foreground/10 transition-colors"
          title="LinkedIn"
        >
          <MessageSquare size={16} className="text-gray-600 dark:text-gray-400" />
        </a>

        <div className="w-px h-9 bg-foreground/20  mx-1" />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-50 dark:hover:bg-foreground/10 transition-colors"
          title="Toggle theme"
        >
          <Sun size={19} className="text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </div>
  );
}
