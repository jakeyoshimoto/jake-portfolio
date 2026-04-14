import type { Metadata } from "next";
import {
  experienceItems,
  resumePdfPath,
  siteProfile,
  skillGroups,
} from "../portfolio-data";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV overview for Jake Yoshimoto with education, experience highlights, and engineering skill areas.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
      <section className="rounded-[1.8rem] border border-foreground/10 bg-white/84 p-8 shadow-[0_14px_44px_rgba(15,23,42,0.06)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Curriculum Vitae
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Education, experience, and technical work in one place.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/74">
              I&apos;m a {siteProfile.title.toLowerCase()} at {siteProfile.school},
              graduating in {siteProfile.graduation}, pursuing a{" "}
              {siteProfile.degree} with an {siteProfile.minor}. My strongest work
              spans embedded systems, controls, robotics, mechatronics, and
              software used to support real technical decisions.
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-sky-100 bg-sky-50/80 p-5 lg:min-w-[16rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
              Document
            </p>
            <p className="mt-2 text-base leading-7 text-slate-700">
              Open the full CV as a PDF.
            </p>
            {resumePdfPath ? (
              <a
                href={resumePdfPath}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
                target="_blank"
                rel="noreferrer"
              >
                Open PDF CV
              </a>
            ) : (
              <div className="mt-5 rounded-[1.2rem] border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-700">
                Add your PDF CV to{" "}
                <code className="rounded bg-white px-1.5 py-0.5">
                  public/Jake_Yoshimoto_CV.pdf
                </code>{" "}
                and we can wire this section to a direct open button.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[1.4rem] border border-foreground/10 bg-white/82 p-6"
          >
            <h2 className="text-xl font-semibold text-slate-950">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-foreground/72">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section
        id="experience-highlights"
        className="mt-12 rounded-[1.8rem] border border-foreground/10 bg-white/84 p-8"
      >
        <h2 className="text-2xl font-semibold text-slate-950">
          Experience Highlights
        </h2>
        <div className="mt-6 grid gap-5">
          {experienceItems.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-[1.2rem] border border-foreground/8 bg-slate-50/90 p-5"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
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
              <ul className="mt-4 space-y-2 text-sm leading-7 text-foreground/72">
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
      </section>
    </main>
  );
}
