const steps = [
  {
    step: "01",
    title: "Discover",
    body: "Automatically inventory every model, agent, and dataset in use — including the shadow AI nobody registered.",
  },
  {
    step: "02",
    title: "Assess",
    body: "Score risk, map regulatory obligations, and surface bias, privacy, and quality issues before deployment.",
  },
  {
    step: "03",
    title: "Enforce",
    body: "Apply policy-as-code and human-in-the-loop approvals so nothing ships or acts outside agreed boundaries.",
  },
  {
    step: "04",
    title: "Monitor & prove",
    body: "Track drift and behavior in production, and generate audit-ready evidence on demand — not the week before an audit.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-ink/60">
            A continuous loop, not a one-time checklist.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step}>
              <div className="text-sm font-mono text-brand-500">{s.step}</div>
              <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
