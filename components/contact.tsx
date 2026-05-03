import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p className="text-sm text-gray-500 mb-6">
        Recruiter, founder, or hiring manager, feel free to reach out by email
        or LinkedIn.
      </p>

      <div className="rounded-xl border border-foreground/10 p-6">
        <h3 className="font-semibold text-base mb-2">
          Open to strong product teams
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-md">
          If you are hiring for web, mobile, or full-stack product engineering,
          I would be happy to talk through the role, the team, and what you are
          building.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="https://calendly.com/sorohmichael/30min"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Schedule a call
            <ArrowUpRight size={14} />
          </a>
          <a
            href="https://linkedin.com/in/kariebi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-foreground/20 text-sm font-medium hover:border-gray-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
