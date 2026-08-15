import Icon from "./Icon";

const items = [
  {
    icon: "lock",
    title: "Enterprise-grade security",
    body: "SSO, granular RBAC, full audit logging, and encryption in transit and at rest.",
  },
  {
    icon: "shield",
    title: "Regulatory coverage",
    body: "Built-in mappings for the EU AI Act, GDPR, HIPAA, FINRA, and SOC 2-aligned controls.",
  },
  {
    icon: "activity",
    title: "Deployment flexibility",
    body: "Cloud, VPC, or self-hosted — governance runs where your data already lives.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Trust & security
        </h2>
        <p className="mt-4 text-ink/60">
          Governance software that meets the same bar it holds everything else to.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-black/5 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <Icon name={i.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-ink">{i.title}</h3>
            <p className="mt-2 text-sm text-ink/60">{i.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
