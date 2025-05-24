import AboutUs from "@/pages/home-page/AboutUsSection"
import CompanySection from "@/pages/home-page/CompanySection"
import ContactSection from "@/pages/home-page/ContactSection"

import {HeroSection} from "@/pages/home-page/HeroSection"
import ProductSection from "@/pages/home-page/ProductSection"
import {ServicesSection} from "@/pages/home-page/ServicesSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <ProductSection />
      <ContactSection />
      <CompanySection />
    </main>
  )
}
