const highlights = [
  {
    quote:
      "I enjoy owning the path from design handoff to production release, keeping the UI sharp while making sure the system behind it stays stable and maintainable.",
    name: "End-to-end delivery",
    role: "Frontend to backend ownership",
  },
  {
    quote:
      "Most of my work lives in product teams that need fast iteration, clear communication, and code that still holds up well after launch and handoff.",
    name: "Product focus",
    role: "Built for real users",
  },
  {
    quote:
      "I am strongest in TypeScript-heavy stacks, especially React, Next.js, React Native, NestJS, and realtime infrastructure that keeps apps responsive.",
    name: "Technical fit",
    role: "Web, mobile, and realtime systems",
  },
];

export default function Testimonials() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-5">What I bring</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((t, i) => (
          <div
            key={i}
            className={`rounded-xl border border-foreground/10 p-5 flex flex-col gap-4 ${
              i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              {/* <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-400 font-bold shrink-0">
                {t.name[0]}
              </div> */}
              <div>
                <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
