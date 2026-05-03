"use client";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold tracking-tight">
            Daukariebi Michael Soroh
          </span>
          <span className="text-base text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            Full-stack engineer building production web and mobile products with
            TypeScript, React, Next.js, React Native, and scalable backend
            systems.
          </span>
        </div>
        <div className="shrink-0 ml-8">
          <div className="w-16 h-16 rounded-full p-4 bg-gray-200 overflow-hidden flex items-center justify-center text-xl font-bold select-none">
            <img src={"/favicon.ico"} className="w-full h-full" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <a
          href="https://calendly.com/sorohmichael/30min"
          target="_blank"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Schedule a call
          <ArrowUpRight size={14} />
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-foreground/20 text-sm font-medium hover:border-foreground/40 transition-colors"
        >
          See some of my work
        </a>
      </div>
      <div className="flex items-center gap-6 flex-wrap text-sm text-gray-600 dark:text-gray-400">
        <span>
          <span className="font-bold">5+</span> years building software
        </span>
        <span>
          <span className="font-bold">9</span> highlighted projects below
        </span>
        <span>
          <span className="font-bold">Web, mobile, and backend</span> delivery
        </span>
      </div>
    </section>
  );
}
