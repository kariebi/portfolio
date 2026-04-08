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
            I build and ship production software — web apps, mobile apps, fintech
            systems, Web3 integrations, and real-time pipelines. TypeScript-first,
            end to end.
          </span>
        </div>
        <div className="shrink-0 ml-8">
          <div className="w-16 h-16 rounded-full p-4 bg-gray-200 overflow-hidden flex items-center justify-center text-xl font-bold select-none">
         <img src={"/favicon.ico"} className="w-full h-full"/>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <a
          href="mailto:sorohmichael@gmail.com"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Contact me
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
        <span><span className="font-bold">5+</span> years building software</span>
        <span><span className="font-bold">10+</span> products shipped to production</span>
        <span><span className="font-bold">Thousands</span> of users on live apps</span>
      </div>
    </section>
  );
}