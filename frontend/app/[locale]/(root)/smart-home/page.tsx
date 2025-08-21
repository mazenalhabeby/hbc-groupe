import React from "react";
import Section from "@/components/layout/Section";
import Hero from "@/components/ui/Hero";
import ButtonsRow from "@/components/ui/ButtonsRow";
import KpiGrid from "@/components/ui/KpiGrid";
import ImageFrame from "@/components/ui/ImageFrame";
import ChecklistGrid from "@/components/ui/ChecklistGrid";
import ProcessSteps from "@/components/ui/ProcessSteps";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CTA from "@/components/ui/CTA";

export default function SmartHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Hero
        eyebrow="Smart Home & Automation"
        kicker="Comfort. Security. Efficiency."
        title="Intelligent control for modern living"
        description={
          <>
            One seamless system for lighting, climate, shading, security, audio
            and energy. We design and install reliable automation that looks
            great, saves energy, and just works—at home and in small commercial
            spaces.
          </>
        }
        right={
          <ImageFrame
            src="/images/smarthome01.jpg"
            alt="maintenance"
            width={600}
            height={600}
            imgClass="rounded-2xl h-96 object-cover"
            wrapClass="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-md"
          />
        }
      >
        <ButtonsRow
          primary="Explore Solutions"
          primaryHref="#solutions"
          secondary="Get a quote"
          secondaryHref="#contact"
        />
        <KpiGrid
          items={[
            { label: "Rooms automated", value: "1–20+" },
            { label: "Control methods", value: "App • Voice • Wall" },
            { label: "Standards", value: "KNX • Matter • Zigbee" },
          ]}
        />
      </Hero>

      <Section id="solutions" className="py-16">
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
        <ChecklistGrid
          cards={[
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
          ]}
        />
      </Section>

      <Section className="bg-slate-50/60">
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
            <ImageFrame
              src="/images/smarthome-dashboard.png"
              alt="Smart home dashboard UI"
              width={600}
              height={400}
            />
          </div>
        </div>
      </Section>

      <Section>
        <ProcessSteps
          steps={[
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
          ]}
        />
      </Section>

      <Section className="py-0 pb-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">FAQs</h2>
        <FaqAccordion
          items={[
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
          ]}
        />
      </Section>

      <CTA
        title="Ready to plan your smart home?"
        subtitle="Tell us your rooms, priorities, and budget. We’ll propose a tailored setup and timeline—no pressure."
        bullets={[
          "Flexible packages & upgrades",
          "Professional installation",
          "Local & remote support",
          "Clear documentation & handover",
        ]}
        phone="+43 680 13 19 199"
        email="office@hbc-group.us"
      />
    </main>
  );
}
