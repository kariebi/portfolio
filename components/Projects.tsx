import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CRM & Marketplace SaaS Platform",
    date: "Jan 2025 – Present",
    description:
      "Architected and led full-stack development of a CRM and Marketplace SaaS platform from scratch at Execufy, designed to support 100K+ concurrent users. Replaced Convex with a custom Redis + Upstash real-time pipeline, cutting infrastructure costs by an estimated 40%. Introduced end-to-end dynamic typing via oRPC, eliminating a class of runtime type errors across API boundaries.",
    tech: ["Next.js", "TypeScript", "NestJS", "Redis", "Upstash", "oRPC", "PostgreSQL"],
    links: [],
  },
  {
    title: "Market Intelligence Platform",
    date: "Apr 2025 – Present",
    description:
      "Built real-time chat systems using Convex and integrated financial charting tools for a market intelligence platform at Codetratives. Developed AI-driven sentiment analysis modules enabling data-backed trade signal generation. Executed three high-priority milestones within 10 days, accelerating client go-live timelines significantly.",
    tech: ["Next.js", "TypeScript", "Convex", "TailwindCSS", "AI/LLM APIs"],
    links: [],
  },
  {
    title: "Web3 & Fintech Mobile Apps",
    date: "Jun 2023 – Present",
    description:
      "At Musigwe Labs, deployed Web3 solutions on the COTI blockchain to automate decentralized transaction workflows, reducing manual settlement time. Integrated biometric authentication, JWT flows, and Flutterwave payment processing into cross-platform React Native applications. Elevated Telegram mini-app user engagement by 35% through targeted UX improvements.",
    tech: ["React Native", "COTI", "Ethers.js", "Web3", "Flutterwave", "Node.js", "PM2"],
    links: [],
  },
  {
    title: "Homiee.AU Geolocation Claims Feature",
    date: "Jun 2024 – Jul 2025",
    description:
      "Launched a geolocation-based homeowner claims feature at Homiee.AU, contributing to 10% growth in monthly active users. Overhauled the UI component system, raising user satisfaction scores by 30% across key product flows.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    links: [],
  },
  {
    title: "E-Commerce Platform (Tagworld Stores)",
    date: "Jun 2024 – Jul 2025",
    description:
      "Secured user authentication pipelines using Django, improving login success rates by 50% and reducing unauthorized access incidents. Refactored backend database queries, cutting average API response time and improving application responsiveness under peak load.",
    tech: ["Django", "Python", "PostgreSQL", "REST APIs"],
    links: [],
  },
  {
    title: "Abinci.ng Frontend Rebuild",
    date: "Nov 2023 – Jul 2025",
    description:
      "Rebuilt 12+ core UI pages and resolved over 1,000 frontend defects, measurably improving user retention. Streamlined CI/CD deployment workflows, increasing release frequency and efficiency by 30%.",
    tech: ["React", "Next.js", "TypeScript", "CI/CD"],
    links: [],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-xl font-semibold mb-5">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-foreground/10 overflow-hidden hover:border-foreground/20 transition-colors"
          >

            <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-600 dark:text-gray-400 text-xs">
              preview
            </div>

            <div className="p-3 flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-sm">{project.title}</span>
                <span className="text-xs text-gray-400">{project.date}</span>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1">
                  {project.description}
                </p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full border border-foreground/10 text-gray-500"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links.length > 0 && (
                <div className="flex gap-3 mt-1">
                  {project.links.map((link: { label: string; href: string; icon?: string }) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.icon === "github" ? (
                        <Github size={12} />
                      ) : (
                        <ExternalLink size={12} />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}