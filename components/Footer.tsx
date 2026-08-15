export default function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-ink/50 sm:flex-row">
        <span>© {new Date().getFullYear()} Sentinel AI. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#capabilities" className="hover:text-ink">
            Capabilities
          </a>
          <a href="#how-it-works" className="hover:text-ink">
            How it works
          </a>
          <a href="#trust" className="hover:text-ink">
            Trust & security
          </a>
        </div>
      </div>
    </footer>
  );
}
