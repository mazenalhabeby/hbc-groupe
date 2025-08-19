import SectionHeading from "@/components/SectionHeading";
import ServiceBox from "@/components/ServiceBox";
import { ServicesSectionData } from "@/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export function ServicesSection() {
  const t = useTranslations();

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden px-2 xl:px-0">
      <Image
        src="/images/bg.jpg"
        alt="Background Image"
        width={1920}
        height={100}
        className="absolute inset-0 w-full object-cover opacity-50"
      />
      <div className="max-w-2xl mx-auto text-center mb-10">
        <SectionHeading
          subtitle={t("home.servicesSection.title")}
          title={t("home.servicesSection.subtitle")}
          backgroundText={t("home.servicesSection.bgText")}
          backgourndTextsize="text-6xl"
          align="center"
        />
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
        {ServicesSectionData.map((service, index) => (
          <ServiceBox
            key={index}
            title={t(service.title)}
            subtitle={t(service.subtitle)}
            description={t(service.description)}
            icon={<service.icon />}
            iconBoxColor={service.color}
            imageUrl={service.img}
          />
        ))}
      </div>
    </section>
  );
}
