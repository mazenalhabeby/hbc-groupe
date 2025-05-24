import ProductCard from "@/components/ProductCard"
import SectionHeading from "@/components/SectionHeading"
import {useTranslations} from "next-intl"
import React from "react"

const ProductItem = [
  {
    imageUrl: "/images/product01.jpg",
    title: "home.product.ecological_perlite",
    subtitle: "home.product.ecological_perlite_subtitle",
    price: 31,
    rating: 4,
  },
  {
    imageUrl: "/images/product02.jpg",
    title: "home.product.ultimate_raised_bed",
    subtitle: "home.product.ultimate_raised_bed_subtitle",
    price: 12,
    rating: 4.5,
  },
  {
    imageUrl: "/images/product03.jpg",
    title: "home.product.fabric_plaster",
    subtitle: "home.product.plaster_subtitle",
    price: 87,
    rating: 4,
  },
  {
    imageUrl: "/images/product04.jpg",
    title: "home.product.fills_screed",
    subtitle: "home.product.fills_screed_subtitle",
    price: 36,
    rating: 5,
  },
]

export default function ProductSection() {
  const t = useTranslations()

  return (
    <section className="py-16 bg-gray-200 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <SectionHeading
          subtitle={t("home.product.subtitle")}
          title={t("home.product.title")}
          backgroundText={t("home.product.bgText")}
          backgourndTextsize="text-6xl"
          align="center"
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {ProductItem.map((item, index) => (
          <ProductCard
            key={index}
            imageUrl={item.imageUrl}
            title={t(item.title)}
            subtitle={t(item.subtitle)}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  )
}
