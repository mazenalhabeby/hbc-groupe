import React from "react";
import Section from "@/components/layout/Section";
import Hero from "@/components/ui/Hero";
import ButtonsRow from "@/components/ui/ButtonsRow";
import KpiGrid from "@/components/ui/KpiGrid";
import ImageFrame from "@/components/ui/ImageFrame";
import ProcessSteps from "@/components/ui/ProcessSteps";
import CTA from "@/components/ui/CTA";

export default function FireProtection() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Hero
        eyebrow="Fire Protection"
        eyebrowColor="rose"
        kicker="Safer buildings, smarter materials"
        title="Wood, films, and facades engineered for fire safety"
        description={
          <>
            We help you slow flame spread, reduce smoke, and meet code with
            materials and systems designed for performance and aesthetics.
          </>
        }
        right={
          <ImageFrame
            src="/images/fire-prodaction.png"
            alt="maintenance"
            width={600}
            height={600}
            imgClass="rounded-2xl h-96 object-cover"
            wrapClass="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-md"
          />
        }
      >
        <ButtonsRow
          primary="Explore products"
          primaryHref="#products"
          secondary="Get a quote"
          secondaryHref="#contact"
        />
        <KpiGrid
          small
          items={[
            { label: "Applications", value: "Industrial / Commercial" },
            { label: "Targets", value: "Flame & Smoke" },
            { label: "Support", value: "Consult + Supply" },
          ]}
        />
      </Hero>

      <Section id="products" className="py-16">
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
          {[
            {
              img: "/images/fire-prodaction-01.jpg",
              title: "Wood preservation",
              desc: "Fire-retardant coatings, impregnations, and treatments help wooden components meet protection requirements—reducing flammability and extending service life in buildings.",
              items: [
                "Fire-retardant coatings & impregnation",
                "Lower flame spread and smoke development",
                "For beams, panels, interior & exterior use (as specified)",
              ],
            },
            {
              img: "/images/fire-prodaction-02.jpg",
              title: "Film protection",
              desc: "High-quality fire-protection films slow flame spread and help reduce smoke. Suitable for windows, doors, and walls—and they can also reflect heat to improve indoor comfort.",
              items: [
                "Compatible with glazing, doors, and interior panels",
                "Helps limit flame propagation and smoke",
                "Thermal reflection can support energy efficiency",
              ],
            },
            {
              img: "/images/fire-prodaction-03.jpg",
              title: "Facade",
              desc: "Fire-resistant facade solutions combine safety, durability, and design freedom—slowing external fire spread while meeting regulatory demands.",
              items: [
                "Non-combustible / fire-resistant materials (as specified)",
                "Engineered details to limit vertical fire spread",
                "Aesthetic options for new build and retrofit",
              ],
            },
          ].map((c) => (
            <article
              key={c.title}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-100">
                <ImageFrame
                  src={c.img}
                  alt={c.title}
                  width={560}
                  height={420}
                  imgClass="h-full w-full object-cover"
                  wrapClass="aspect-[4/3] overflow-hidden rounded-xl border border-slate-100"
                />
              </div>
              <div className="mt-5">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200">
                  <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
                  {c.title}
                </div>
                <p className="text-sm text-slate-600">{c.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {c.items.map((i) => (
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
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50/60">
        <ProcessSteps
          steps={[
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
            { n: 4, t: "Support", d: "Assist with install and verification." },
          ]}
        />
      </Section>

      <CTA
        gradientFrom="from-rose-600"
        gradientTo="to-orange-600"
        title="Need guidance on specs?"
        subtitle="Send us drawings and requirements—we’ll recommend compliant materials and details for your project."
        bullets={[
          "Project-based recommendations",
          "Documentation & test data (on request)",
          "New build & retrofit",
          "EU & USA support",
        ]}
        phone="+43 680 13 19 199"
        email="office@hbc-group.us"
      />
    </main>
  );
}
