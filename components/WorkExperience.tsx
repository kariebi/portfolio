"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    company: "Execufy",
    role: "Full-Stack Engineer",
    type: "Remote",
    period: "Jan 2025 - Present",
    logo: "/assets/logos/execufy.jpeg",
    details: [
      "Built product-facing web experiences for a hospitality operations platform.",
      "Translated designs into polished, functional, accessible UI components.",
      "Worked across full system delivery, realtime product flows, and production readiness.",
    ],
  },
  {
    company: "Codetratives",
    role: "Lead Full-Stack Developer",
    type: "Remote",
    period: "Apr 2025 - Apr 2026",
    logo: "/assets/logos/codetratives.svg",
    details: [
      "Led delivery across client web and mobile products.",
      "Built realtime features and data-heavy user flows.",
      "Helped raise delivery quality across the team.",
    ],
  },
  {
    company: "Musigwe Labs",
    role: "Lead Frontend & Web3 Developer",
    type: "Remote",
    period: "Jun 2023 - Present",
     logo: "/assets/logos/musigwelabs.png",
    details: [
      "Worked on cross-platform mobile apps for iOS and Android.",
      "Integrated authentication, payments, and Web3-related workflows.",
      "Improved UX on mobile and Telegram-based product experiences.",
    ],
  },
  {
    company: "Homiee.AU",
    role: "Frontend Engineer",
    type: "Remote",
    period: "Jun 2024 - Jul 2025",
    logo: "/assets/logos/homiee.jpg",
    details: [
      "Shipped a geolocation-based claims experience.",
      "Improved the UI system for cleaner, more consistent product flows.",
    ],
  },
  {
    company: "Abinci.ng",
    role: "Lead Frontend Engineer",
    type: "Remote",
    period: "Nov 2023 - Jul 2025",
    logo: "/assets/logos/abinci.ico",
    details: [
      "Led rebuild work across core frontend pages.",
      "Improved maintainability and release confidence for the product team.",
      "Supported better delivery workflows and faster iteration.",
    ],
  },
];

export default function WorkExperience() {
  const [openCompany, setOpenCompany] = useState<string | null>(null);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
      <div className="flex flex-col gap-2">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="flex items-center gap-4 p-4 rounded-xl border border-foreground/5 hover:border-foreground/10 transition-colors"
          >
            <div className="w-full">
              <button
                type="button"
                onClick={() =>
                  setOpenCompany((current) =>
                    current === exp.company ? null : exp.company,
                  )
                }
                className="w-full flex items-center gap-4 text-left"
              >
                <div className="w-12 h-12 rounded bg-gray-50 flex items-center justify-center text-xs text-gray-400 font-bold shrink-0 overflow-hidden">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain bg-white p-0.5"
                    />
                  ) : (
                    exp.company[0]
                  )}
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-medium text-sm truncate">
                        {exp.company}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full border border-foreground/10 text-gray-500 shrink-0">
                        {exp.type}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-xs text-gray-500">{exp.role}</span>
                    <ChevronDown
                      size={14}
                      className={`text-gray-400 mt-0.5 shrink-0 transition-transform duration-300 ${
                        openCompany === exp.company ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openCompany === exp.company && (
                  <motion.div
                    key={`${exp.company}-details`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pl-16 pr-1 pt-4 pb-3">
                      <div className="">
                        <ul className="flex list-disc flex-col gap-2">
                          {exp.details.map((detail) => (
                            <li
                              key={detail}
                              className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
