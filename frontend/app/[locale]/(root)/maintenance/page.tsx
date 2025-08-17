import Image from "next/image";
import React from "react";

export default function Maintenance() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <section className="relative overflow-hidden py-8">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-blue-300" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-emerald-300" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
                Industrial Services
              </p>
              <div>
                <span className=" text-xl font-bold tracking-wider">
                  Passion and experts
                </span>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Your expert partner for maintenance with vision
                </h1>
              </div>

              <p className="mt-4 max-w-2xl text-base leading-loose text-slate-600">
                Leave your maintenance experts to us – your reliable partner for
                top performance! Fight wear and tear and downtime! Our team of
                highly qualified professionals is ready to take charge of your
                maintenance needs. With tailor-made strategies and solutions, we
                offer you effective and efficient services to ensure that your
                systems are always in top shape.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  View Services
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  Get a quote
                </a>
              </div>
              <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
                {[
                  { label: "Avg. Response", value: "< 4 H" },
                  { label: "Uptime Impact", value: "+ 18 %" },
                  { label: "Client Retention", value: "96 %" },
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
                  src={"/images/maintenance.jpeg"}
                  alt={"maintenance"}
                  width={600}
                  height={600}
                  className="rounded-2xl h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What we do
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Full-lifecycle support—from installation and commissioning to
              predictive maintenance and emergency call-outs.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Preventive Maintenance",
              desc: "Scheduled inspections, lubrication, calibration, and parts replacement to extend asset life.",
              items: [
                "CMMS checklists",
                "OEM parts",
                "Safety-first procedures",
              ],
            },
            {
              title: "Corrective Maintenance",
              desc: "Rapid diagnosis and repair to restore full operation with minimal downtime.",
              items: ["Root-cause analysis", "On-site repair", "Post-fix QA"],
            },
            {
              title: "Predictive Maintenance",
              desc: "Condition monitoring with vibration, thermal, and oil analysis to prevent failures.",
              items: [
                "Sensor-based insights",
                "Trend dashboards",
                "Targeted interventions",
              ],
            },
            {
              title: "24/7 Emergency Response",
              desc: "Round-the-clock on-call engineers for critical faults and breakdowns.",
              items: ["<4h response", "Temporary bypass", "Permanent fix plan"],
            },
            {
              title: "Installation & Commissioning",
              desc: "Safe, compliant equipment installs with performance verification.",
              items: [
                "Load & alignment",
                "I/O checks",
                "Performance baselines",
              ],
            },
            {
              title: "Relocation & Reassembly",
              desc: "Turnkey machine moves, leveling, alignment, and start-up support.",
              items: ["De-/re-assembly", "Laser alignment", "Handover docs"],
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

      {/* Process */}
      <section className="bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            How we work
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: 1,
                t: "Assess",
                d: "Site survey, asset register, and criticality ranking.",
              },
              {
                n: 2,
                t: "Plan",
                d: "Maintenance strategy & spare parts plan aligned to your KPIs.",
              },
              {
                n: 3,
                t: "Execute",
                d: "Technicians perform tasks with digital checklists & QA gates.",
              },
              {
                n: 4,
                t: "Optimize",
                d: "Performance review and continuous improvement cycle.",
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

      {/* Sectors */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Sectors we serve
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Manufacturing",
            "Energy",
            "Automotive",
            "Food & Beverage",
            "Logistics",
            "Construction",
            "Public Sector",
          ].map((s) => (
            <span
              key={s}
              className="rounded-full border border-slate-300 bg-white px-4 py-1 text-sm text-slate-700"
            >
              {s}
            </span>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">FAQs</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {[
            {
              q: "Do you offer service contracts?",
              a: "Yes. We offer flexible SLAs with quarterly reviews, guaranteed response times, and KPI-driven reporting.",
            },
            {
              q: "Can you work on mixed OEM fleets?",
              a: "Absolutely. Our technicians are trained across multiple OEMs and standards with full safety compliance.",
            },
            {
              q: "Do you provide predictive maintenance?",
              a: "We implement sensor-based condition monitoring and trend analysis to prevent unplanned downtime.",
            },
            {
              q: "Which regions do you cover?",
              a: "We operate across the EU and USA, with rapid mobilization for emergency call-outs.",
            },
          ].map((f) => (
            <details key={f.q} className="group p-6 open:bg-slate-50">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-medium text-slate-900">
                <span>{f.q}</span>
                <span className="ml-4 rounded-full border border-slate-300 p-1 transition group-open:rotate-45">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M10 4v12M4 10h12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section id="contact" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-10"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold">Need urgent support?</h2>
              <p className="mt-2 text-slate-600">
                Our engineers are on-call 24/7. Get immediate assistance or
                schedule a site visit.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />{" "}
                  On-site diagnostics
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />{" "}
                  Temporary bypass solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />{" "}
                  Spare parts sourcing
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />{" "}
                  Post-repair validation
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
