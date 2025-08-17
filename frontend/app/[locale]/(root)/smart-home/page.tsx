import Image from "next/image";
import React from "react";

export default function SmartHome() {
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
                Smart Home & Automation
              </p>

              <div>
                <span className="text-xl font-bold tracking-wider">
                  Comfort. Security. Efficiency.
                </span>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Intelligent control for modern living
                </h1>
              </div>

              <p className="mt-4 max-w-2xl text-base leading-loose text-slate-600">
                One seamless system for lighting, climate, shading, security,
                audio and energy. We design and install reliable automation that
                looks great, saves energy, and just works—at home and in small
                commercial spaces.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#solutions"
                  className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  Explore Solutions
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  Get a quote
                </a>
              </div>

              {/* Quick highlights */}
              <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
                {[
                  { label: "Rooms automated", value: "1–20+" },
                  { label: "Control methods", value: "App • Voice • Wall" },
                  { label: "Standards", value: "KNX • Matter • Zigbee" },
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
                  src="/images/smarthome01.jpg"
                  alt="Smart home living room with automated lighting and shades"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        id="solutions"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What we automate
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              All the essentials—beautifully integrated and easy to control from
              one app or wall panel.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Lighting & Scenes",
              desc: "Dimmable circuits, tunable white, and presets for every moment.",
              items: ["Scene buttons", "Motion logic", "Daylight tuning"],
            },
            {
              title: "Climate & Air",
              desc: "Smart heating/cooling with schedules and room-by-room control.",
              items: ["Thermostats", "Sensors", "Energy-savvy profiles"],
            },
            {
              title: "Shading & Windows",
              desc: "Automate blinds/curtains with sun tracking and privacy modes.",
              items: ["Time-based", "Weather-aware", "Quiet motors"],
            },
            {
              title: "Security & Access",
              desc: "Cameras, alarms, door locks and intercom—managed in one place.",
              items: ["Alerts", "Remote unlock", "Activity history"],
            },
            {
              title: "Energy & PV",
              desc: "Monitor consumption and prioritize self-consumption from solar.",
              items: ["Smart meters", "Load control", "EV charger hooks"],
            },
            {
              title: "Audio & Media",
              desc: "Multiroom music and TV control with scene integration.",
              items: ["Voice ready", "Room groups", "Family friendly"],
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

      {/* Ecosystem */}
      <section className="bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ecosystem & standards
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Open standards keep your system flexible and future-ready. We design
            around your preferred platforms and budget.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "KNX",
              "Matter",
              "Thread",
              "Zigbee",
              "Z-Wave",
              "HomeKit",
              "Google Home",
              "Amazon Alexa",
              "Modbus",
            ].map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-300 bg-white px-4 py-1 text-sm text-slate-700"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Packages that fit your project
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          From a single room to a full home. Upgrade anytime—your scenes and
          devices stay in sync.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Essentials",
              desc: "Perfect for apartments or a first room.",
              items: [
                "Lighting & scenes",
                "Basic climate control",
                "App + voice control",
              ],
            },
            {
              name: "Comfort",
              desc: "The sweet spot for family homes.",
              items: [
                "Lighting, climate, shades",
                "Security basics",
                "Energy dashboard",
              ],
            },
            {
              name: "Pro",
              desc: "For villas & small commercial spaces.",
              items: [
                "Full-home automation",
                "CCTV & access control",
                "PV & EV integration",
              ],
            },
          ].map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                {p.name}
              </div>
              <p className="text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.items.map((x) => (
                  <li key={x} className="flex items-start gap-2">
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
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section className="bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                One screen for everything
              </h2>
              <p className="mt-2 max-w-prose text-slate-600">
                Create scenes like “Good Morning”, “Cinema”, or “Away”; view
                cameras and doorbell; and track energy—all from a single, fast
                interface on wall panel and mobile.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  "Instant, reliable control",
                  "Family-friendly presets",
                  "Secure remote access",
                  "Dark & light UI modes",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
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
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-md">
                <Image
                  src="/images/smarthome-dashboard.png"
                  alt="Smart home dashboard UI"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            How we work
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: 1,
                t: "Discover",
                d: "Walk-through and goals: comfort, security, energy.",
              },
              {
                n: 2,
                t: "Design",
                d: "Device plan, wiring, scenes, and network layout.",
              },
              {
                n: 3,
                t: "Install",
                d: "Neat installation, testing, and handover training.",
              },
              {
                n: 4,
                t: "Support",
                d: "Remote assistance, updates, and new features.",
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

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-0 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">FAQs</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {[
            {
              q: "Can you use my existing devices?",
              a: "In many cases yes. We audit current gear and integrate compatible devices via KNX, Matter, Zigbee or bridges.",
            },
            {
              q: "Do I need wiring or can it be wireless?",
              a: "Both are possible. New builds favor wired backbones; renovations can use secure, reliable wireless where suitable.",
            },
            {
              q: "Is there an app?",
              a: "Yes—wall panel and mobile app with remote access, notifications, scenes and user roles.",
            },
            {
              q: "What about privacy?",
              a: "Local-first control where possible, strong encryption for remote access, and clear data retention settings.",
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
                Ready to plan your smart home?
              </h2>
              <p className="mt-2 text-slate-600">
                Tell us your rooms, priorities, and budget. We’ll propose a
                tailored setup and timeline—no pressure.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Flexible packages & upgrades
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Professional installation
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Local & remote support
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Clear documentation & handover
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
