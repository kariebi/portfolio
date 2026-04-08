const testimonials = [
  {
    quote:
      "Working with Michael was a game-changer for our product. He took ownership of the full-stack from day one — real-time pipeline, clean API design, and pixel-perfect UI. Communication was always clear and every feature was delivered on time. Highly recommended.",
    name: "Lorem Ipsum",
    role: "CTO, Fintech Startup",
  },
  {
    quote:
      "We had a chaotic codebase with inconsistent types and constant production bugs. Michael refactored our Node.js backend, eliminated a class of runtime errors with oRPC, and significantly improved our API response times. Our app is finally stable.",
    name: "Lorem Dolor",
    role: "Founder, SaaS Platform",
  },
  {
    quote:
      "Honestly one of the smoothest engagements I've had. We needed a React Native app with biometric auth and payment processing, and he delivered a polished, production-ready solution faster than I expected. I'd work with him again without hesitation.",
    name: "Lorem Sit Amet",
    role: "CEO, Mobile-First Company",
  },
];

export default function Testimonials() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-5">What clients say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
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
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-400 font-bold shrink-0">
                {t.name[0]}
              </div>
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