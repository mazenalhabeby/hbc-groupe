// app/fire-protection/page.tsx
import Image from "next/image";
import React from "react";

export default function FireProtection() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden py-8">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-rose-300" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-orange-300" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-sm font-medium text-rose-700 ring-1 ring-rose-200">
                Fire Protection
              </p>
              <div>
                <span className="text-xl font-bold tracking-wider">
                  Safer buildings, smarter materials
                </span>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Wood, films, and facades engineered for fire safety
                </h1>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-loose text-slate-600">
                We help you slow flame spread, reduce smoke, and meet code with
                materials and systems designed for performance and aesthetics.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  Explore products
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  Get a quote
                </a>
              </div>

              {/* quick stats / badges */}
              <dl className="mt-8 grid max-w-xl grid-cols-3 gap-4">
                {[
                  { label: "Applications", value: "Industrial / Commercial" },
                  { label: "Targets", value: "Flame & Smoke" },
                  { label: "Support", value: "Consult + Supply" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                  >
                    <dt className="text-xs text-slate-500">{s.label}</dt>
                    <dd className="mt-1 text-sm font-semibold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-md">
                <Image
                  src="/images/fire-prodaction.png"
                  alt="Modern building fire protection materials"
                  width={640}
                  height={480}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Fire protection solutions
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Three focused product lines—wood preservation, film protection, and
            facade—combine safety with durability and design freedom.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Wood preservation */}
          <article className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-100">
              <Image
                src="/images/fire-prodaction-01.jpg"
                alt="Fire-protective treatment for wood"
                width={560}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
                Wood preservation
              </div>
              <p className="text-sm text-slate-600">
                Fire-retardant coatings, impregnations, and treatments help
                wooden components meet protection requirements—reducing
                flammability and extending service life in buildings.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  "Fire-retardant coatings & impregnation",
                  "Lower flame spread and smoke development",
                  "For beams, panels, interior & exterior use (as specified)",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="mt-1 h-4 w-4 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Film protection */}
          <article className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-100">
              <Image
                src="/images/fire-prodaction-02.jpg"
                alt="Fire-protection films for glass and surfaces"
                width={560}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
                Film protection
              </div>
              <p className="text-sm text-slate-600">
                High-quality fire-protection films slow flame spread and help
                reduce smoke. Suitable for windows, doors, and walls—and they
                can also reflect heat to improve indoor comfort.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  "Compatible with glazing, doors, and interior panels",
                  "Helps limit flame propagation and smoke",
                  "Thermal reflection can support energy efficiency",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="mt-1 h-4 w-4 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Facade */}
          <article className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-100">
              <Image
                src="/images/fire-prodaction-03.jpg"
                alt="Fire-safe facade systems"
                width={560}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
                Facade
              </div>
              <p className="text-sm text-slate-600">
                Fire-resistant facade solutions combine safety, durability, and
                design freedom—slowing external fire spread while meeting
                regulatory demands.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  "Non-combustible / fire-resistant materials (as specified)",
                  "Engineered details to limit vertical fire spread",
                  "Aesthetic options for new build and retrofit",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="mt-1 h-4 w-4 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Process / How we work */}
      <section className="bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            How we work
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: 1,
                t: "Consult",
                d: "Discuss use case, code needs, and targets.",
              },
              {
                n: 2,
                t: "Specify",
                d: "Select materials, details, and test data.",
              },
              { n: 3, t: "Supply", d: "Deliver product and documentation." },
              {
                n: 4,
                t: "Support",
                d: "Assist with install and verification.",
              },
            ].map((s) => (
              <li
                key={s.t}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="absolute -top-3 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow ring-4 ring-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA banner */}
      <section id="contact" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-rose-600 to-orange-600 opacity-10"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold">Need guidance on specs?</h2>
              <p className="mt-2 text-slate-600">
                Send us drawings and requirements—we’ll recommend compliant
                materials and details for your project.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                {[
                  "Project-based recommendations",
                  "Documentation & test data (on request)",
                  "New build & retrofit",
                  "EU & USA support",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+436801319199"
                className="block rounded-xl bg-slate-900 px-5 py-3 text-center font-medium text-white shadow-sm transition hover:bg-slate-700"
              >
                Call +43 680 13 19 199
              </a>
              <a
                href="mailto:office@hbc-group.us"
                className="block rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-medium text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                office@hbc-group.us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
