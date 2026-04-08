import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const otherWork = [
  {
    date: "Jun 2023",
    title: "Geolocation Claims System",
    location: "Port Harcourt, NG",
    description:
      "Launched a geolocation-based homeowner claims feature at Homiee.AU. Contributed to 10% growth in monthly active users. The feature enables users to verify property claims based on GPS coordinates.",
    links: [],
  },
  {
    date: "Sep 2023",
    title: "CRM Monorepo Architecture Migration",
    location: "Remote",
    description:
      "Migrated a multi-package codebase into a monorepo architecture at Execufy, reducing cross-package dependency conflicts and standardizing tooling across engineering teams.",
    links: [],
  },
  {
    date: "Nov 2023",
    title: "COTI Blockchain Integration",
    location: "Remote",
    description:
      "Deployed Web3 solutions on the COTI blockchain to automate decentralized transaction workflows at Musigwe Labs. Reduced manual settlement time significantly.",
    links: [],
  },
  {
    date: "Jan 2024",
    title: "Django Auth Hardening (Tagworld)",
    location: "Remote",
    description:
      "Secured user authentication pipelines using Django at Tagworld Stores, improving login success rates by 50% and reducing unauthorized access incidents.",
    links: [],
  },
  {
    date: "Mar 2024",
    title: "Telegram Mini-App UX Overhaul",
    location: "Remote",
    description:
      "Elevated Telegram mini-app user engagement by 35% at Musigwe Labs through targeted UX improvements and performance optimizations.",
    links: [],
  },
  {
    date: "Jul 2024",
    title: "CI/CD Pipeline Streamlining (Abinci.ng)",
    location: "Remote",
    description:
      "Streamlined CI/CD deployment workflows at Abinci.ng, increasing release frequency and efficiency by 30%. Resolved over 1,000 frontend defects across 12+ core UI pages.",
    links: [],
  },
  {
    date: "Jan 2025",
    title: "And lots more...",
    location: "Nigeria, Remote",
    description:
      "Continued shipping production software across fintech, real estate, and Web3 verticals. Always building.",
    links: [],
  },
];

export default function OtherWork() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-5">Other Work</h2>
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-foreground/10" />

        <div className="flex flex-col gap-2">
          {otherWork.map((item, i) => {
            const isLast = Boolean(i === otherWork.length - 1);
            return (
              <div key={i} className="relative flex gap-6 pl-5">
                {/* Dot */}
                <div className="absolute left-3.5 top-2 w-3 h-3 rounded-full border-2 border-foreground/20 bg-background" />
                <div
                  className={cn(
                    "border-y border-dashed pl-9",
                    !isLast && "border-b-0",
                  )}
                >
                  <div className="flex flex-col gap-1 pt-3 pb-6">
                    <span className="text-xs text-gray-400">{item.date}</span>
                    <span className="text-sm font-medium">{item.title}</span>
                    <span className="text-xs text-gray-400">
                      {item.location}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                    {item.links.length > 0 && (
                      <div className="flex gap-3 mt-1">
                        {item.links.map(
                          (link: { label: string; href: string }) => (
                            <a
                              key={link.label}
                              href={link.href}
                              className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 transition-colors"
                            >
                              <ExternalLink size={11} />
                              {link.label}
                            </a>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
