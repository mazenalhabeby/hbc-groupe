import SectionHeading from "@/components/SectionHeading"
import ServiceBox from "@/components/ServiceBox"
import {useTranslations} from "next-intl"
import Image from "next/image"
import React from "react"
import {FaHome, FaLeaf, FaWrench} from "react-icons/fa"
import {FaCubes, FaFire} from "react-icons/fa6"

const services = [
  {
    icon: FaCubes,
    title: "home.services.buildingMaterials.title",
    subtitle: "home.services.buildingMaterials.subtitle",
    description: "home.services.buildingMaterials.description",
    color: "bg-red-500",
    img: "/images/serviceImg01.jpg",
  },
  {
    icon: FaLeaf,
    title: "home.services.greenConstruction.title",
    subtitle: "home.services.greenConstruction.subtitle",
    description: "home.services.greenConstruction.description",
    color: "bg-green-500",
    img: "/images/serviceImg02.jpg",
  },
  {
    icon: FaFire,
    title: "home.services.fireProtection.title",
    subtitle: "home.services.fireProtection.subtitle",
    description: "home.services.fireProtection.description",
    color: "bg-orange-500",
    img: "/images/serviceImg03.jpg",
  },
  {
    icon: FaWrench,
    title: "home.services.maintenance.title",
    subtitle: "home.services.maintenance.subtitle",
    description: "home.services.maintenance.description",
    color: "bg-blue-500",
    img: "/images/serviceImg04.jpg",
  },
  {
    icon: FaHome,
    title: "home.services.smartHome.title",
    subtitle: "home.services.smartHome.subtitle",
    description: "home.services.smartHome.description",
    color: "bg-purple-500",
    img: "/images/serviceImg05.jpg",
  },
]

export const ServicesSection = () => {
  const t = useTranslations()

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden px-2 xl:px-0">
      <Image
        src="/images/bg.jpg"
        alt="Background Image"
        width={1920}
        height={100}
        className="absolute inset-0 w-full h-1/2 object-cover opacity-50"
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

      <div className="flex flex-row flex-wrap justify-center gap-8">
        {services.map((service, index) => (
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
  )
}
