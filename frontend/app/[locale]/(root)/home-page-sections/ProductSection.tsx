import ProductCard from "@/components/ProductCard"
import SectionHeading from "@/components/SectionHeading"
import { ProductItemSectionData } from "@/data"
import {useTranslations} from "next-intl"
import React from "react"

export function ProductSection() {
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
        {ProductItemSectionData.map((item, index) => (
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
