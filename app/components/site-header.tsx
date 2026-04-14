import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/65 bg-background/88 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-[0.26em] text-foreground">
            Jake Yoshimoto
          </span>
          <span className="text-xs text-foreground/62">
            Robotics Engineering Portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-foreground/72 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
