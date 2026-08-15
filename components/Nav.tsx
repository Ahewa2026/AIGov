const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#trust", label: "Trust & security" },
  { href: "#cta", label: "Get a demo" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
            S
          </span>
          Sentinel AI
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
          {links.slice(0, 3).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
        >
          Get a demo
        </a>
      </div>
    </header>
  );
}
