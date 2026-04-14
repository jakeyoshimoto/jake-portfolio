import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "./components/project-card";
import {
  contactPlaceholders,
  experienceItems,
  featuredProjects,
  siteProfile,
  skillGroups,
} from "./portfolio-data";

const quickStats = [
  {
    label: "Graduation",
    value: siteProfile.graduation,
  },
  {
    label: "Education",
    value: [siteProfile.school, siteProfile.degree, siteProfile.minor],
  },
  {
    label: "Academic",
    value: siteProfile.gpa,
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.18),_transparent_68%)]" />
        <div className="absolute left-0 top-96 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.12),_transparent_72%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 sm:py-16">
        <section className="grid items-start gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14 lg:pt-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/80 shadow-[0_16px_44px_rgba(15,23,42,0.08)] sm:w-52 sm:flex-none">
                <Image
                  src="/jake-headshot.png"
                  alt="Headshot of Jake Yoshimoto"
                  width={900}
                  height={1100}
                  priority
                  className="h-72 w-full object-cover object-center sm:h-60"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  {siteProfile.name}
                </p>
                <div className="mt-3 space-y-2 text-base leading-7 text-foreground/68 sm:text-lg">
                  {contactPlaceholders.map((item) => (
                    <p key={item.label}>
                      <span className="font-medium text-foreground">
                        {item.label}:
                      </span>{" "}
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sky-800 transition hover:text-sky-950"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold tracking-[-0.05em] text-balance text-slate-950 sm:text-6xl lg:text-7xl">
              Robotics, embedded systems, and controls.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/74 sm:text-xl">
              {siteProfile.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {siteProfile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-900"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-900"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full border border-sky-300 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-950 transition hover:border-sky-400 hover:bg-sky-50"
              >
                CV
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-foreground/14 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-sky-400 hover:bg-sky-50"
              >
                Contact
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-white/60 bg-white/82 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur">
            <div className="rounded-[1.4rem] bg-[linear-gradient(160deg,#0f172a_0%,#153b64_52%,#2563eb_100%)] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.22em] text-white/66">
                Snapshot
              </p>
              <div className="mt-6 space-y-5">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="border-b border-white/12 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/54">
                      {stat.label}
                    </p>
                    {Array.isArray(stat.value) ? (
                      <div className="mt-2 space-y-1 text-base leading-7 text-white/88">
                        {stat.value.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-2 text-base leading-7 text-white/88">
                        {stat.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[1.4rem] border border-sky-100 bg-sky-50/90 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
                Focus
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Interested in internships and early-career engineering roles
                spanning robotics, embedded systems, controls, mechatronics, and
                software-heavy technical work.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-foreground/10 bg-white/74 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Introduction
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Building systems where hardware, software, and testing all matter.
            </h2>
          </div>
          <div className="grid gap-5 text-base leading-8 text-foreground/72 sm:text-lg">
            <p>
              I study Robotics Engineering at UC Santa Cruz and complement that
              foundation with electrical engineering coursework and hands-on
              system integration experience.
            </p>
            <p>
              My projects consistently center on sensing, control, embedded
              logic, and turning technical ideas into working systems that can
              be tested against real constraints.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Featured Projects
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Work that shows embedded control, intelligent systems, and
                system integration.
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-sky-800 transition hover:text-sky-950"
            >
              See all projects
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="rounded-[1.8rem] border border-foreground/10 bg-white/82 p-8 shadow-[0_14px_44px_rgba(15,23,42,0.06)]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Skills Overview
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Technical tools and systems work I use most often.
            </h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <section
                key={group.title}
                className="rounded-[1.2rem] border border-sky-100 bg-sky-50/70 p-5"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white bg-white px-3 py-1 text-sm text-foreground/78"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="rounded-[1.8rem] border border-foreground/10 bg-white/82 p-8 shadow-[0_14px_44px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Experience Snapshot
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Recent roles and technical environments.
              </h2>
            </div>
            <Link
              href="/resume"
              className="text-sm font-semibold text-sky-800 transition hover:text-sky-950"
            >
              View CV
            </Link>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {experienceItems.slice(0, 2).map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-[1.25rem] border border-foreground/8 bg-slate-50/90 p-5"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">
                      {item.role}
                    </h3>
                    <p className="text-sm text-foreground/68">
                      {item.company} | {item.location}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-sky-800">
                    {item.dates}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-foreground/72">
                  {item.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-foreground/70">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {item.technologies ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white bg-white px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-start">
            <Link
              href="/resume#experience-highlights"
              className="inline-flex items-center justify-center rounded-full border border-foreground/14 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-sky-400 hover:bg-sky-50"
            >
              View More Experience
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
