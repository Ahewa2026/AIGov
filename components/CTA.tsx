"use client";

export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl bg-ink px-8 py-16 text-center text-white md:px-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Know what your AI is doing. Prove it whenever asked.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          See how Sentinel AI inventories, governs, and monitors every model
          and agent in your organization — in a 30-minute walkthrough.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Work email"
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand-400"
          />
          <button
            type="submit"
            className="w-full shrink-0 rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-400 sm:w-auto"
          >
            Get a demo
          </button>
        </form>
      </div>
    </section>
  );
}
