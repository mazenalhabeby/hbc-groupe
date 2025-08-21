import React from "react";
import Section from "@/components/layout/Section";
import Hero from "@/components/ui/Hero";
import ButtonsRow from "@/components/ui/ButtonsRow";
import KpiGrid from "@/components/ui/KpiGrid";
import ImageFrame from "@/components/ui/ImageFrame";
import ChecklistGrid from "@/components/ui/ChecklistGrid";
import ProcessSteps from "@/components/ui/ProcessSteps";
import TagPills from "@/components/ui/TagPills";
import CTA from "@/components/ui/CTA";
import Image from "next/image";

export default function AboutCompany() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Hero — Who we are */}
      <Hero
        eyebrow="About HBC Group"
        kicker="Sustainable by design"
        title="We build practical solutions for better buildings and smarter living"
        description={
          <>
            HBC Group is an Austria-based company delivering sustainable
            materials, industrial maintenance, fire protection solutions, and
            smart home automation. Founded in <strong>2012</strong>, we combine
            engineering know-how with a clear purpose: make buildings and
            operations safer, more efficient, and kinder to the environment.
          </>
        }
        right={
          <ImageFrame
            src="/images/about-hero.jpg"
            alt="HBC Group team working across materials and technology"
            width={640}
            height={480}
            imgClass="rounded-2xl object-cover h-96"
            wrapClass="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-md"
          />
        }
      >
        <ButtonsRow
          primary="Get to know us"
          primaryHref="#values"
          secondary="Contact"
          secondaryHref="/contact"
        />
        <KpiGrid
          items={[
            { label: "Founded", value: "2012" },
            { label: "Regions", value: "EU & USA" },
            { label: "Projects Delivered", value: "750+" },
          ]}
        />
      </Hero>

      {/* Core elements */}
      <Section id="core" className="py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Who we are</h3>
            <p className="mt-2 text-sm text-slate-600">
              HBC Group GmbH is headquartered in Laakirchen, Austria, serving
              customers across Europe and the United States. We unite industrial
              services and modern building solutions under one roof.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Our purpose</h3>
            <p className="mt-2 text-sm text-slate-600">
              Help companies and communities operate more reliably and
              sustainably—through dependable maintenance, safer materials, and
              intelligent automation.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">What we offer</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "Industrial Maintenance (preventive, corrective, predictive, 24/7 response)",
                "Fire Protection (wood preservation, film protection, facades)",
                "Sustainable Materials (substrates for green roofs, water retention, nurseries)",
                "Smart Home & Automation (lighting, climate, shading, security, energy, audio)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
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
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Who we serve</h3>
            <p className="mt-2 text-sm text-slate-600">
              Manufacturers, logistics, energy, construction, public sector and
              developers—plus homeowners and small commercial spaces adopting
              modern automation.
            </p>
            <TagPills
              items={[
                "Manufacturing",
                "Energy",
                "Automotive",
                "Logistics",
                "Construction",
                "Public Sector",
                "Residential",
              ]}
            />
          </article>
        </div>
      </Section>

      {/* Values */}
      <Section id="values" className="bg-slate-50/60">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          What guides us
        </h2>
        <ChecklistGrid
          cards={[
            {
              title: "Sustainability",
              desc: "Design choices that lower impact over the full life cycle—materials, energy, and maintenance.",
              items: [
                "Responsible sourcing",
                "Water-wise systems",
                "Long service life",
              ],
            },
            {
              title: "Reliability",
              desc: "We prioritize uptime, safety, and quality in everything from service SLAs to product specs.",
              items: ["Clear KPIs", "QA gates", "Documented handovers"],
            },
            {
              title: "Innovation",
              desc: "We bring together smart controls and modern materials to solve real-world problems.",
              items: [
                "Open standards",
                "Data-driven insights",
                "Continuous improvement",
              ],
            },
            {
              title: "Partnership",
              desc: "Strong relationships with clients and OEMs—transparent, responsive, and long-term oriented.",
              items: ["Accountable teams", "Regular reviews", "Shared goals"],
            },
          ]}
        />
      </Section>

      {/* Our story / timeline */}
      <Section className="py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Our story
        </h2>
        <ProcessSteps
          steps={[
            {
              n: 1,
              t: "Founded in 2012",
              d: "We started with a simple idea: practical solutions that make buildings and operations perform better.",
            },
            {
              n: 2,
              t: "Built on service",
              d: "Industrial maintenance and fire protection formed our early backbone—focused on uptime and safety.",
            },
            {
              n: 3,
              t: "Sustainable materials",
              d: "We expanded into engineered substrates and eco-materials for cities: roofs, water storage, nurseries.",
            },
            {
              n: 4,
              t: "Smart living",
              d: "Smart home & automation bring comfort, security, and efficiency—open standards, future-ready.",
            },
          ]}
        />
      </Section>

      {/* Vision & achievements */}
      <Section className="py-16 bg-slate-50/60">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Where we’re heading
            </h2>
            <p className="mt-2 max-w-prose text-slate-600">
              A future where materials and controls work together seamlessly:
              safer buildings, leaner operations, and lower environmental
              impact—delivered through reliable service and open technology.
            </p>
            <div className="mt-6">
              <TagPills
                items={[
                  "Low-impact materials",
                  "Open automation",
                  "Data & insights",
                  "Predictive service",
                ]}
              />
            </div>
          </div>
          <div>
            <KpiGrid
              items={[
                { label: "Years Active", value: "12+" },
                { label: "Projects Completed", value: "750+" },
                { label: "Clients Served", value: "2000+" },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* People (compact) */}
      <Section className="py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          The people behind HBC
        </h2>
        <p className="mt-2 max-w-prose text-slate-600">
          Our team spans industrial technicians, engineers, and automation
          specialists. We’re hands-on, certified across multiple OEMs and open
          standards, and motivated by solving real-world problems with care.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Andreas Holub",
              role: "Managing Director",
              img: "/images/team-andreas.jpg",
            },
            {
              name: "Field Service Team",
              role: "Industrial Maintenance",
              img: "/images/team-service.jpg",
            },
            {
              name: "Automation Team",
              role: "Smart Home & Controls",
              img: "/images/team-automation.jpg",
            },
          ].map((m) => (
            <article
              key={m.name}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-100">
                <Image
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <div className="text-base font-semibold">{m.name}</div>
                <div className="text-sm text-slate-600">{m.role}</div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <CTA
        title="Let’s build something reliable and sustainable"
        subtitle="Tell us about your project—maintenance, materials, fire protection, or smart home—and we’ll recommend the right approach."
        bullets={[
          "Project-based recommendations",
          "Clear documentation & handover",
          "EU & USA support",
          "Fast response times",
        ]}
        phone="+43 680 13 19 199"
        email="office@hbc-group.us"
      />
    </main>
  );
}
