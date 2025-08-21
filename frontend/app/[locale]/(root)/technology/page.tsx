import React from "react";
import Section from "@/components/layout/Section";
import Hero from "@/components/ui/Hero";
import ButtonsRow from "@/components/ui/ButtonsRow";
import KpiGrid from "@/components/ui/KpiGrid";
import ImageFrame from "@/components/ui/ImageFrame";
import ChecklistGrid from "@/components/ui/ChecklistGrid";
import ProcessSteps from "@/components/ui/ProcessSteps";
import CTA from "@/components/ui/CTA";

export default function Technology() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Hero
        eyebrow="Sustainable Materials"
        kicker="Nature-engineered performance"
        title="Sustainable & ecological plant substrates"
        description={
          <>
            Our plant substrates are engineered for modern cities and
            horticulture: ideal for <strong>green roofs</strong>,
            <strong> water storage</strong>, and reducing irrigation in{" "}
            <strong>breeding plantations</strong>. They balance water retention,
            drainage, nutrients, and low weight—supporting healthy growth while
            saving resources.
          </>
        }
        right={
          <ImageFrame
            src="/images/technology.jpg"
            alt="maintenance"
            width={600}
            height={600}
            imgClass="rounded-2xl h-96 object-cover"
            wrapClass="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-md"
          />
        }
      >
        <ButtonsRow
          primary="Explore Substrates"
          primaryHref="#substrates"
          secondary="Request a sample"
          secondaryHref="#contact"
        />
        <KpiGrid
          items={[
            { label: "Irrigation Reduction", value: "20–40%" },
            { label: "Recycled Content", value: "60–90%" },
            { label: "Roof Load (Dry)", value: "≤ 800 kg/m³" },
          ]}
        />
      </Hero>

      <Section id="applications" className="py-16">
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
        <ChecklistGrid
          cards={[
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
          ]}
        />
      </Section>

      <Section id="substrates" className="bg-slate-50/60">
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
      </Section>

      <Section>
        <ProcessSteps
          steps={[
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
          ]}
        />
      </Section>

      <CTA
        title="Let’s choose the right substrate for your project"
        subtitle="Send us your use case (roof, nursery, rain garden). We’ll recommend a blend and provide a quick quote or a sample."
        bullets={[
          "Project-specific blends",
          "Installation guidance",
          "Bulk & bagged supply",
          "Fast EU & US delivery",
        ]}
        phone="+43 680 13 19 199"
        email="office@hbc-group.us"
      />
    </main>
  );
}
