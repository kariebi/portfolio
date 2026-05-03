import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width={12} height={12} fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" width={12} height={12} fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.22.99.14l.11-.06 11.02-6.37-2.49-2.49-9.63 8.78zm-1.1-20.1a2 2 0 0 0-.08.54v15.6c0 .19.03.37.08.54l.05.08 8.73-8.73v-.2L2.08 3.58l-.05.08zM20.17 10.43l-2.47-1.43-2.77 2.77 2.77 2.77 2.49-1.44c.71-.41.71-1.27-.02-1.67zm-17 11.45l9.63-8.78-2.49-2.49L1.29 17.7l1.88 4.18z" />
  </svg>
);

const NpmIcon = () => (
  <svg viewBox="0 0 24 24" width={12} height={12} fill="currentColor">
    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474C23.214 24 24 23.214 24 22.237V1.763C24 .786 23.214 0 22.237 0H1.763zm7.927 18.894H6.979V8.87h2.711v7.315h2.711V8.87h2.711v10.024h-5.422zm5.422 0V8.87h5.422v10.024h-2.711v-7.315h-2.711z" />
  </svg>
);

type ProjectLink = {
  label: string;
  href: string;
  icon?: "github" | "apple" | "google-play" | "npm";
};

type Project = {
  title: string;
  date: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  image?: string;
};

const projects: Project[] = [
  {
    title: "Execufy.io",
    date: "Execufy • Web Platform",
    description:
      "Built product-facing web experiences for a hospitality operations platform serving clubs, hotels, restaurants, and resorts. Contributed polished frontend implementation, clear information architecture, and production-ready product flows.",
    tech: ["Next.js", "TypeScript", "Responsive UI", "Product Design"],
    links: [{ label: "Website", href: "https://execufy.io" }],
    image: "/assets/screenshots/execufy.png",
  },
  {
    title: "Sprayfi",
    date: "Musigwe Labs • iOS & Android",
    description:
      "Cross-platform mobile app shipped at Musigwe Labs for iOS and Android, with production-focused UI work, secure user flows, and the kind of app polish needed for real users and real releases.",
    tech: ["React Native", "TypeScript", "Mobile UI", "iOS", "Android"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.kariebi.sprayfi",
        icon: "google-play",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/sprayfi/id6749469143",
        icon: "apple",
      },
    ],
    image: "/assets/screenshots/sprayfi.png",
  },
  {
    title: "MarinePumpDB",
    date: "Codetratives • iOS & Android",
    description:
      "Cross-platform mobile app delivered at Codetratives with a focus on dependable mobile workflows, clean data presentation, and a smooth experience across both iOS and Android devices.",
    tech: ["Mobile Development", "APIs", "TypeScript", "iOS", "Android"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/gb/app/marinepumpdb/id6757639717",
        icon: "apple",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.kariebi2.client",
        icon: "google-play",
      },
    ],
    image: "/assets/screenshots/marinepumpdb.png",
  },
  {
    title: "Fincore",
    date: "Musigwe Labs • iOS & Android",
    description:
      "Cross-platform app built at Musigwe Labs, where I worked on secure mobile flows, backend integration, and clear user-facing experiences shaped for production deployment.",
    tech: [
      "React Native",
      "Authentication",
      "API Integration",
      "iOS",
      "Android",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/mx/app/fincore/id6761393366",
        icon: "apple",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.team.fincore",
        icon: "google-play",
      },
    ],
    image: "/assets/screenshots/fincore.png",
  },
  // {
  //   title: "StudyFlex",
  //   date: "Musigwe Labs • Android",
  //   description:
  //     "Android application built at Musigwe Labs with attention to usable learning flows, mobile performance, and an interface that feels straightforward for day-to-day use.",
  //   tech: ["Android", "Mobile UI", "Performance", "Product UX"],
  //   links: [
  //     {
  //       label: "Google Play",
  //       href: "https://play.google.com/store/apps/details?id=com.kariebi.studyflex",
  //       icon: "google-play",
  //     },
  //   ],
  // },
  {
    title: "Sepow.co",
    date: "Codetratives • Website",
    description:
      "Website delivered while at Codetratives, translating brand and product requirements into a clean, responsive web presence with a polished frontend implementation.",
    tech: ["Next.js", "TypeScript", "Responsive UI", "Frontend"],
    links: [
      { label: "Website", href: "https://sepow.co" },
      {
        label: "Demo",
        href: "https://www.loom.com/share/2a16d7846a964a958ae0713e59517d02?sid=131087d6-59ce-40cb-967d-7302180a1d7a",
      },
    ],
    image: "/assets/screenshots/sepow.png",
  },
  {
    title: "Abinci.ng",
    date: "Abinci.ng • Website",
    description:
      "Led frontend rebuild work across core pages at Abinci.ng, improving maintainability, polishing customer-facing flows, and supporting faster releases through stronger delivery workflows.",
    tech: ["React", "Next.js", "TypeScript", "CI/CD"],
    links: [{ label: "Website", href: "https://abinci.ng" }],
    image: "/assets/screenshots/abinci.png",
  },
  {
    title: "Activaq",
    date: "Open Source • TypeScript SDK",
    description:
      "Built a TypeScript SDK for Redis-powered real-time presence, active user counts, session heatmaps, and live room analytics, including a Next.js example app for hands-on integration.",
    tech: ["TypeScript", "Redis", "SSE", "Next.js", "SDK"],
    links: [
      {
        label: "Github",
        href: "https://github.com/kariebi/activaq",
        icon: "github",
      },
      {
        label: "NPM Package",
        href: "https://www.npmjs.com/package/@activaq/sdk",
        icon: "npm",
      },
    ],
    image: "/assets/screenshots/activaq.png",
  },
  {
    title: "Emitd",
    date: "Open Source • Self-Hosted Webhooks",
    description:
      "Built a type-safe, self-hostable webhook delivery engine with retry handling, delivery guarantees, and detailed logs for event-driven applications.",
    tech: ["NestJS", "TypeScript", "Redis", "BullMQ", "PostgreSQL"],
    links: [
      {
        label: "Github",
        href: "https://github.com/kariebi/emitd",
        icon: "github",
      },
      {
        label: "NPM Package",
        href: "https://www.npmjs.com/package/@emitd/client",
        icon: "npm",
      },
    ],
    image: "/assets/screenshots/emitd.png",
  },
];

function LinkIcon({ icon }: { icon?: ProjectLink["icon"] }) {
  if (icon === "github") return <Github size={12} />;
  if (icon === "apple") return <AppleIcon />;
  if (icon === "google-play") return <GooglePlayIcon />;
  if (icon === "npm") return <NpmIcon />;
  return <ExternalLink size={12} />;
}

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-xl font-semibold mb-5">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl flex flex-col border border-foreground/10 overflow-hidden hover:border-foreground/20 transition-colors"
          >
            <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-600 dark:text-gray-400 text-xs overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              ) : (
                <span>Preview Unavailable</span>
              )}
            </div>

            <div className="p-3 flex-1 flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-sm">{project.title}</span>
                <span className="text-xs text-gray-400">{project.date}</span>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 mt-1 mb-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full border border-foreground/10 text-gray-500"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="flex gap-3 mt-1">
                  {project.links.map((link) => (
                    <a
                      key={link.label + link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-gray-500 dark:hover:text-gray-200 hover:text-gray-900 transition-colors"
                    >
                      <LinkIcon icon={link.icon} />
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
