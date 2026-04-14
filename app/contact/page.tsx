import type { Metadata } from "next";
import { contactPlaceholders } from "../portfolio-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact page for Jake Yoshimoto with space for email, LinkedIn, and GitHub links.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 sm:py-16">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          Contact
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
          Get in touch.
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/74">
          If you&apos;d like to talk about internships, projects, or engineering
          opportunities, email is the best place to reach me. You can also find
          me on LinkedIn.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {contactPlaceholders.map((item) => (
          <article
            key={item.label}
            className="rounded-[1.5rem] border border-foreground/10 bg-white/84 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="mt-4 inline-flex text-base leading-7 text-sky-800 transition hover:text-sky-950"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-4 text-base leading-7 text-foreground/74">
                {item.value}
              </p>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
