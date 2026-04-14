import Link from "next/link";
import type { Project } from "../portfolio-data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-[1.5rem] border border-foreground/10 bg-white/86 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-foreground/58">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 text-base leading-7 text-foreground/72">
        {project.cardSummary}
      </p>
      <p className="mt-3 text-sm leading-6 text-foreground/62">{project.role}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center rounded-full border border-foreground/14 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-sky-400 hover:bg-sky-50"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
