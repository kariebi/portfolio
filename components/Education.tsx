const education = [
  {
    institution: "Federal University of Technology Owerri (FUTO)",
    degree: "B.Eng. Mechatronics Engineering",
    period: "Expected 2025",
  },
];

export default function Education() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      <div className="flex flex-col gap-2">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="flex items-center gap-4 p-4 rounded-xl border border-foreground/5 hover:border-foreground/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-xs text-gray-400 font-bold shrink-0">
              {edu.institution[0]}
            </div>
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium text-sm truncate">{edu.institution}</span>
                <span className="text-xs text-gray-400 shrink-0">{edu.period}</span>
              </div>
              <span className="text-xs text-gray-500">{edu.degree}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}