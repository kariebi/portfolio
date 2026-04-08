const skills = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Python",
  "SQL",
  "Node.js",
  "NestJS",
  "Express.js",
  "FastAPI",
  "Django",
  "Flask",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
  "Upstash",
  "Prisma ORM",
  "Docker",
  "AWS",
  "GCP",
  "CI/CD",
  "Linux",
  "PM2",
  "COTI",
  "Ethers.js",
  "Web3",
  "GraphQL",
  "WebSockets",
  "oRPC",
  "REST APIs",
  "Jest",
  "React Testing Library",
  "Tailwind CSS",
  "Shadcn UI",
  "Material UI",
  "Vue.js",
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-3 py-1 rounded-full border border-foreground/10 text-gray-600 dark:text-gray-400 hover:border-gray-300 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}