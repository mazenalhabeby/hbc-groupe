import React from "react";

export default function Contact() {
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
                Contact HBC Group
              </p>
              <div>
                <span className="text-xl font-bold tracking-wider">
                  We’re here to help
                </span>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Contact us
                </h1>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-loose text-slate-600">
                Sales • Support • Partnerships — share a few details and we’ll
                get back within one business day.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <a
                  href="tel:+436801319199"
                  className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  Call +43 680 13 19 199
                </a>
                <a
                  href="mailto:office@hbc-group.us"
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  office@hbc-group.us
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs text-slate-500">Headquarters</div>
                  <div className="mt-1 font-medium">
                    Kapellenstraße 30, 4664 Laakirchen, Austria
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Hours</div>
                  <div className="mt-1 font-medium">Mon–Thr · 8:00–17:00</div>
                  <div className="mt-1 font-medium">Fri · 8:00–12:00</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Regions</div>
                  <div className="mt-1 font-medium">EU & USA</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Response</div>
                  <div className="mt-1 font-medium tabular-nums">
                    &lt; 1 business day
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section id="contact" className="bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Tell us about your project
              </h2>
              <p className="mt-2 max-w-prose text-slate-600">
                Choose a service below and share a few details. We’ll follow up
                with the next steps.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <form action="#" method="post" className="space-y-4">
                  {/* Honeypot (spam protection) */}
                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        required
                        name="name"
                        autoComplete="name"
                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        autoComplete="organization"
                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        placeholder="+43 ..."
                      />
                    </div>
                  </div>

                  {/* Global service selector (all divisions) */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>

                      <optgroup label="Maintenance">
                        <option>Preventive maintenance</option>
                        <option>Corrective maintenance</option>
                        <option>Predictive maintenance</option>
                        <option>24/7 emergency response</option>
                        <option>Installation & commissioning</option>
                        <option>Relocation & reassembly</option>
                      </optgroup>

                      <optgroup label="Sustainable Plant Substrates">
                        <option>Green roof systems</option>
                        <option>Water storage & retention</option>
                        <option>Nursery & breeding mixes</option>
                        <option>Landscape & urban trees</option>
                        <option>Parks & bioswales</option>
                        <option>Façade & container greening</option>
                      </optgroup>

                      <optgroup label="Smart Home & Automation">
                        <option>Lighting & scenes</option>
                        <option>Climate & air</option>
                        <option>Shading & windows</option>
                        <option>Security & access</option>
                        <option>Energy & PV</option>
                        <option>Audio & media</option>
                      </optgroup>

                      <optgroup label="Other">
                        <option>General inquiry</option>
                        <option>Partnerships</option>
                        <option>Support</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                      placeholder="Describe your project, timeline, and any specifics..."
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      id="consent"
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-300"
                    />
                    <label htmlFor="consent" className="text-sm text-slate-600">
                      I agree to be contacted by HBC Group about my request.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-slate-700 sm:w-auto"
                  >
                    Submit request
                  </button>
                  <p className="text-xs text-slate-500">
                    We respect your privacy and won’t share your details.
                  </p>
                </form>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Direct contact</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Prefer to talk now? Reach us anytime.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>
                    <strong>Phone:</strong> +43 680 13 19 199
                  </li>
                  <li>
                    <strong>Email:</strong> office@hbc-group.us
                  </li>
                  <li>
                    <strong>HQ:</strong> Kapellenstraße 30, 4664 Laakirchen,
                    Austria
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Why HBC</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {[
                    "Certified multi-OEM technicians",
                    "Rapid spare part sourcing",
                    "Digital checklists & reports",
                    "EU & USA coverage",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
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
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Find us
        </h2>
        <p className="mt-2 max-w-prose text-slate-600">
          Visit our headquarters or schedule a site visit—we’ll come to you.
        </p>

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-[16/9] w-full">
            <iframe
              title="HBC Group HQ"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={
                "https://www.google.com/maps?q=Kapellenstraße%2030%2C%204664%20Laakirchen%2C%20Austria&z=14&output=embed"
              }
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 p-4 text-sm text-slate-700">
            <div>
              <strong>Address:</strong> Kapellenstraße 30, 4664 Laakirchen,
              Austria
            </div>
            <a
              className="rounded-lg border border-slate-300 px-3 py-1 hover:bg-slate-50"
              href="https://www.google.com/maps/search/?api=1&query=Kapellenstraße%2030%2C%204664%20Laakirchen%2C%20Austria"
              target="_blank"
              rel="noreferrer noopener"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
