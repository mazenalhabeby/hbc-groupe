import Image from "next/image";
import React from "react";

export default function Technology() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden py-8">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-blue-300" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-emerald-300" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
                Sustainable Materials
              </p>
              <div>
                <span className="text-xl font-bold tracking-wider">
                  Nature-engineered performance
                </span>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Sustainable & ecological plant substrates
                </h1>
              </div>

              <p className="mt-4 max-w-2xl text-base leading-loose text-slate-600">
                Our plant substrates are engineered for modern cities and
                horticulture: ideal for <strong>green roofs</strong>,
                <strong> water storage</strong>, and reducing irrigation in{" "}
                <strong>breeding plantations</strong>. They balance water
                retention, drainage, nutrients, and low weight—supporting
                healthy growth while saving resources.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#substrates"
                  className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  Explore Substrates
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  Request a sample
                </a>
              </div>

              {/* Quick highlights */}
              <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
                {[
                  { label: "Irrigation Reduction", value: "20–40%" },
                  { label: "Recycled Content", value: "60–90%" },
                  { label: "Roof Load (Dry)", value: "≤ 800 kg/m³" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                  >
                    <dt className="text-xs text-slate-500">{stat.label}</dt>
                    <dd className="mt-1 text-xl font-semibold tabular-nums">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-md">
                <Image
                  src="/images/technology.jpg"
                  alt="Green roof with lightweight, water-retentive substrate"
                  width={600}
                  height={600}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section
        id="applications"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Where our substrates excel
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Designed for performance across urban greening, water management,
              and professional horticulture.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Green Roof Systems",
              desc: "Lightweight blends with optimal drainage and root stability for extensive and semi-intensive roofs.",
              items: ["Low load", "High aeration", "Root resistance"],
            },
            {
              title: "Water Storage & Retention",
              desc: "Engineered mixes that buffer rainwater and release it steadily—reducing stormwater runoff.",
              items: ["High WHC", "Capillary action", "Consistent moisture"],
            },
            {
              title: "Breeding & Nurseries",
              desc: "Stable structure and tailored nutrients to cut irrigation needs and promote robust root systems.",
              items: ["Reduced watering", "Uniform growth", "Clean handling"],
            },
            {
              title: "Landscape & Urban Trees",
              desc: "Urban mixes supporting tree pits and planters, improving resilience in heat-island zones.",
              items: ["Long-term stability", "Ventilation", "Nutrient balance"],
            },
            {
              title: "Parks & Bioswales",
              desc: "Permeable blends for rain gardens and infiltration beds that manage peak rainfall.",
              items: ["Permeability", "Filtration", "Erosion control"],
            },
            {
              title: "Façade & Container Greening",
              desc: "Light mixes for vertical planters and containers with reliable water supply.",
              items: ["Low weight", "Water buffer", "Clean substrate"],
            },
          ].map((card) => (
            <article
              key={card.title}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                {card.title}
              </div>
              <p className="text-sm text-slate-600">{card.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {card.items.map((i) => (
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
            </article>
          ))}
        </div>
      </section>

      {/* Substrate families */}
      <section id="substrates" className="bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Substrate families
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Roof-Lite Mix",
                desc: "Ultra-light blend for extensive roofs where weight and drainage are critical.",
                specs: ["Bulk density: low", "High drainage", "Root-safe"],
              },
              {
                name: "Hydro-Retention Mix",
                desc: "High water-holding capacity for buffering and steady release in hot climates.",
                specs: ["High WHC", "Capillary lift", "Even moisture"],
              },
              {
                name: "Nursery & Breeding Mix",
                desc: "Stable structure and nutrients to reduce irrigation while ensuring vigorous growth.",
                specs: [
                  "Reduced watering",
                  "Nutrient-balanced",
                  "Clean + uniform",
                ],
              },
            ].map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2">
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
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Key properties */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Water Holding Capacity", v: "High & stable" },
              { k: "Drainage", v: "Controlled outflow" },
              { k: "pH (typical)", v: "Slightly acidic–neutral" },
              { k: "Organic Content", v: "Optimized for crop" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
              >
                <div className="text-xs text-slate-500">{x.k}</div>
                <div className="mt-1 text-lg font-semibold">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            How we work
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: 1,
                t: "Sourcing",
                d: "Select mineral & organic components with traceable origin.",
              },
              {
                n: 2,
                t: "Custom Blending",
                d: "Balance drainage, WHC, nutrients, and weight for each use case.",
              },
              {
                n: 3,
                t: "Quality Testing",
                d: "Granulometry, moisture, pH & consistency checks for every batch.",
              },
              {
                n: 4,
                t: "Delivery & Support",
                d: "Bulk or bagged—plus installation guidance and aftercare.",
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

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-10"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold">
                Let’s choose the right substrate for your project
              </h2>
              <p className="mt-2 text-slate-600">
                Send us your use case (roof, nursery, rain garden). We’ll
                recommend a blend and provide a quick quote or a sample.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Project-specific blends
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Installation guidance
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Bulk & bagged supply
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Fast EU & US delivery
                </li>
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
