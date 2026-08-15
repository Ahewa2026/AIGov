import Icon from "./Icon";

const stats = [
  { value: "100%", label: "of AI agents inventoried, not just the ones IT knows about" },
  { value: "9", label: "governance domains covered in one control plane" },
  { value: "0", label: "shadow models left unmonitored" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            <Icon name="shield" className="h-3.5 w-3.5" />
            Built for the full AI lifecycle
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            Govern every model, agent,
            <br className="hidden md:block" /> and dataset — in one place.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
            Sentinel AI gives enterprises a single control plane to inventory,
            assess, monitor, and prove compliance for every AI system in
            production — before regulators, auditors, or incidents find the
            gaps first.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="w-full rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-700 sm:w-auto"
            >
              Get a demo
            </a>
            <a
              href="#capabilities"
              className="w-full rounded-lg border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink transition hover:border-black/20 sm:w-auto"
            >
              Explore capabilities
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 rounded-2xl border border-black/5 bg-white p-8 shadow-sm sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-3xl font-semibold text-brand-600">{s.value}</div>
              <div className="mt-1 text-sm text-ink/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
