import Image from "next/image"
import React from "react"

const partnerLogos = [
  "/images/hbc01.png",
  "/images/hbc02.png",
  "/images/hbc03.png",
  "/images/hbc04.png",
]

export default function CompanySection() {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-[70%] overflow-hidden mx-auto">
          <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

          <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <div className="animate-scroll flex gap-12 whitespace-nowrap">
            {partnerLogos.concat(partnerLogos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 relative">
                <Image
                  src={logo}
                  alt={`Partner ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
