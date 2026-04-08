const experiences = [
  {
    company: "Execufy",
    role: "Full-Stack Engineer",
    type: "Remote",
    period: "Jan 2025 – Present",
  },
  {
    company: "Codetratives",
    role: "Lead Full-Stack Developer",
    type: "Remote",
    period: "Apr 2025 – Present",
  },
  {
    company: "Musigwe Labs",
    role: "Lead Frontend & Web3 Developer",
    type: "Remote",
    period: "Jun 2023 – Present",
  },
  {
    company: "Homiee.AU",
    role: "Frontend Engineer",
    type: "Remote",
    period: "Jun 2024 – Jul 2025",
  },
  {
    company: "Tagworld Stores",
    role: "Full-Stack Developer",
    type: "Remote",
    period: "Jun 2024 – Jul 2025",
  },
  {
    company: "Abinci.ng",
    role: "Lead Frontend Engineer",
    type: "Remote",
    period: "Nov 2023 – Jul 2025",
  },
  {
    company: "X3 Staffing, Inc.",
    role: "Full-Stack Engineer",
    type: "Remote",
    period: "Sep 2023 – Jul 2025",
  },
];

export default function WorkExperience() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
      <div className="flex flex-col gap-2">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="flex items-center gap-4 p-4 rounded-xl border border-foreground/5 hover:border-foreground/10 transition-colors"
          >
            {/* Logo placeholder */}
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-xs text-gray-400 font-bold shrink-0">
              {exp.company[0]}
            </div>
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-medium text-sm truncate">{exp.company}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-foreground/10 text-gray-500 shrink-0">
                    {exp.type}
                  </span>
                </div>
                <span className="text-xs text-gray-400 shrink-0">{exp.period}</span>
              </div>
              <span className="text-xs text-gray-500">{exp.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}