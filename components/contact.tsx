import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p className="text-sm text-gray-500 mb-6">
        Prefer a quick message? Reach me via email or LinkedIn.
      </p>

      <div className="rounded-xl border border-foreground/10 p-6">
        <h3 className="font-semibold text-base mb-2">Ready to build something?</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-md">
          Drop me an email and let me know what you're trying to build or fix.
          I'll give you an honest answer on what it would take. No pressure.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="mailto:sorohmichael@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Send an email
            <ArrowUpRight size={14} />
          </a>
          <a
            href="https://linkedin.com/in/kariebi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-foreground/20 text-sm font-medium hover:border-gray-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}