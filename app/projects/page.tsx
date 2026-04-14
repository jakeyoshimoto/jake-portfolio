import type { Metadata } from "next";
import { ProjectCard } from "../components/project-card";
import { featuredProjects } from "../portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects by Jake Yoshimoto spanning embedded systems, controls, mechatronics, signal processing, and applied software.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          Projects
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
          Technical projects across embedded systems, signal processing, and
          robotics.
        </h1>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
