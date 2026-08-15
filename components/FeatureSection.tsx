import Icon from "./Icon";
import { featureCategories } from "@/lib/features";

export default function FeatureSection() {
  return (
    <section id="capabilities" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Nine domains. One control plane.
        </h2>
        <p className="mt-4 text-ink/60">
          Every capability enterprises need to inventory, secure, and prove
          compliance for AI — without stitching together five different
          tools.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featureCategories.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-black/5 bg-white p-6 transition hover:border-brand-100 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <Icon name={f.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm text-ink/60">{f.description}</p>
            <ul className="mt-4 space-y-2">
              {f.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-ink/70">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
