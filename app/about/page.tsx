import type { Metadata } from "next";
import { siteProfile } from "../portfolio-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jake Yoshimoto, a UC Santa Cruz Robotics Engineering student with experience spanning robotics, embedded systems, controls, CAD, and applied software.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 sm:py-16">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          About
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
          Engineering systems that bridge hardware and software.
        </h1>
        <div className="mt-8 grid gap-5 text-lg leading-8 text-foreground/74">
          <p>{siteProfile.about}</p>
          <p>
            I&apos;m especially interested in work that combines embedded
            software, controls, sensing, and physical system behavior instead of
            treating them as separate disciplines. That combination has been a
            consistent focus across my projects, internships, and academic
            work.
          </p>
          <p>
            My background spans robotics, mechatronics, embedded development,
            CAD, and technical communication. I value work that is grounded in
            implementation details, real constraints, and measurable system
            behavior.
          </p>
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        <article className="rounded-[1.4rem] border border-foreground/10 bg-white/82 p-6">
          <h2 className="text-xl font-semibold text-slate-950">Education</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/72">
            I&apos;m pursuing a {siteProfile.degree} at UC Santa Cruz with an{" "}
            {siteProfile.minor}, graduating in June 2026.
          </p>
          <p className="mt-3 text-sm font-medium text-sky-800">3.7 GPA</p>
        </article>

        <article className="rounded-[1.4rem] border border-foreground/10 bg-white/82 p-6">
          <h2 className="text-xl font-semibold text-slate-950">
            Technical Lens
          </h2>
          <p className="mt-3 text-sm leading-7 text-foreground/72">
            I&apos;m especially interested in controls, embedded systems,
            mechatronics, signal processing, and intelligent engineering systems
            with practical deployment constraints.
          </p>
        </article>

        <article className="rounded-[1.4rem] border border-foreground/10 bg-white/82 p-6">
          <h2 className="text-xl font-semibold text-slate-950">Working Style</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/72">
            I&apos;m comfortable moving between CAD, code, integration, and
            testing while collaborating with cross-functional teams and
            presenting technical work clearly.
          </p>
        </article>
      </section>
    </main>
  );
}
