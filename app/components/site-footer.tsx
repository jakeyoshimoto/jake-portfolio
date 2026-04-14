import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-foreground/64 sm:px-10 md:flex-row md:items-center md:justify-between">
        <p>
          I&apos;m Jake Yoshimoto, a Robotics Engineering student focused on
          embedded systems, controls, and mechatronics.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link href="/resume" className="hover:text-foreground">
            CV
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
