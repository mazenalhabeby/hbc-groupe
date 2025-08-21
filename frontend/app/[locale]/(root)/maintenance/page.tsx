import React from "react";
import Section from "@/components/layout/Section";
import Hero from "@/components/ui/Hero";
import ButtonsRow from "@/components/ui/ButtonsRow";
import KpiGrid from "@/components/ui/KpiGrid";
import ImageFrame from "@/components/ui/ImageFrame";
import ChecklistGrid from "@/components/ui/ChecklistGrid";
import ProcessSteps from "@/components/ui/ProcessSteps";
import TagPills from "@/components/ui/TagPills";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CTA from "@/components/ui/CTA";

export default function Maintenance() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Hero
        eyebrow="Industrial Services"
        kicker="Passion and experts"
        title="Your expert partner for maintenance with vision"
        description={
          <>
            Leave your maintenance experts to us – your reliable partner for top
            performance! Fight wear and tear and downtime! Our team of highly
            qualified professionals is ready to take charge of your maintenance
            needs. With tailor-made strategies and solutions, we offer you
            effective and efficient services to ensure that your systems are
            always in top shape.
          </>
        }
        right={
          <ImageFrame
            src="/images/maintenance.jpeg"
            alt="maintenance"
            width={600}
            height={600}
            imgClass="rounded-2xl h-96 object-cover"
            wrapClass="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-md"
          />
        }
      >
        <ButtonsRow
          primary="View Services"
          primaryHref="#services"
          secondary="Get a quote"
          secondaryHref="#contact"
        />
        <KpiGrid
          items={[
            { label: "Avg. Response", value: "< 4 H" },
            { label: "Uptime Impact", value: "+ 18 %" },
            { label: "Client Retention", value: "96 %" },
          ]}
        />
      </Hero>

      <Section id="services" className="py-16">
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

        <ChecklistGrid
          cards={[
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
          ]}
        />
      </Section>

      <Section className="bg-slate-50/60">
        <ProcessSteps
          steps={[
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
          ]}
        />
      </Section>

      <Section className="py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Sectors we serve
        </h2>
        <TagPills
          items={[
            "Manufacturing",
            "Energy",
            "Automotive",
            "Food & Beverage",
            "Logistics",
            "Construction",
            "Public Sector",
          ]}
        />
      </Section>

      <Section className="py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">FAQs</h2>
        <FaqAccordion
          items={[
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
          ]}
        />
      </Section>

      <CTA
        title="Need urgent support?"
        subtitle="Our engineers are on-call 24/7. Get immediate assistance or schedule a site visit."
        bullets={[
          "On-site diagnostics",
          "Temporary bypass solutions",
          "Spare parts sourcing",
          "Post-repair validation",
        ]}
        phone="+43 680 13 19 199"
        email="office@hbc-group.us"
      />
    </main>
  );
}
