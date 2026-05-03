import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const otherWork = [
  {
    date: "2026",
    title: "Linux Deployment & Hotfix Releases",
    location: "Musigwe Labs • Remote",
    description:
      "Managed Linux-based application deployments with Node.js and PM2, making it easier to ship updates and same-day fixes when products needed fast turnaround.",
    links: [],
  },
  {
    date: "2025",
    title: "Homiee.AU Claims Flow",
    location: "Frontend Engineering • Remote",
    description:
      "Helped ship a geolocation-based homeowner claims feature and supported a cleaner UI system for an easier, more reliable product experience.",
    links: [],
  },
  {
    date: "2025",
    title: "Telegram Web-App UX Development",
    location: "Musigwe Labs • Remote",
    description:
      "Improved Telegram web-app UX and performance, helping product interactions feel smoother and more responsive for everyday users.",
    links: [],
  },
  {
    date: "2024",
    title: "COTI Blockchain Integrations",
    location: "Musigwe Labs • Remote",
    description:
      "Worked on Web3 integrations on the COTI blockchain to support decentralized transaction workflows and reduce manual operational steps.",
    links: [],
  },
  {
    date: "2024",
    title: "Django Authentication Hardening",
    location: "Tagworld Stores • Remote",
    description:
      "Built more secure authentication flows and improved backend behavior for a production commerce platform using Django and relational data models.",
    links: [],
  },
  {
    date: "2024",
    title: "X3 Staffing Platform Support",
    location: "Full-Stack Engineering • Remote",
    description:
      "Delivered responsive frontend work and API-facing backend improvements, helping core product flows feel faster and more dependable.",
    links: [],
  },
  {
    date: "2023",
    title: "Ongoing Product Delivery",
    location: "Nigeria • Remote",
    description:
      "Shipped production work across mobile, web, backend, and integration-heavy products while continuing to grow range across product and platform engineering.",
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
