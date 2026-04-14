import type { Metadata } from "next";
import Link from "next/link";
import { featuredProjects } from "../../portfolio-data";

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = featuredProjects.find((entry) => entry.slug === slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = featuredProjects.find((entry) => entry.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        <p className="text-foreground/72">Project not found.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 sm:py-16">
      <Link
        href="/projects"
        className="text-sm font-semibold text-sky-800 transition hover:text-sky-950"
      >
        Back to Projects
      </Link>

      <section className="mt-6 rounded-[2rem] border border-foreground/10 bg-white/84 p-8 shadow-[0_16px_48px_rgba(15,23,42,0.06)] sm:p-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/58">
          <span>{project.category}</span>
          <span className="text-foreground/32">|</span>
          <span>{project.year}</span>
        </div>

        <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/74">
          {project.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-900"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[1.6rem] border border-foreground/10 bg-white/82 p-8">
          <h2 className="text-2xl font-semibold text-slate-950">
            Project Overview
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-foreground/74">
            {project.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </article>

        <aside className="rounded-[1.6rem] border border-foreground/10 bg-slate-950 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/58">
            Role / Focus
          </p>
          <p className="mt-4 text-base leading-8 text-white/80">
            {project.focus}
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/58">
            Notes
          </p>
          <p className="mt-4 text-sm leading-7 text-white/74">
            {project.role}
          </p>
        </aside>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <article className="rounded-[1.6rem] border border-foreground/10 bg-white/82 p-8">
          <h2 className="text-2xl font-semibold text-slate-950">
            Technical Details
          </h2>
          <ul className="mt-5 space-y-3 text-base leading-8 text-foreground/74">
            {project.technicalDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.6rem] border border-foreground/10 bg-white/82 p-8">
          <h2 className="text-2xl font-semibold text-slate-950">
            Engineering Challenges
          </h2>
          <ul className="mt-5 space-y-3 text-base leading-8 text-foreground/74">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
