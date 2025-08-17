import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Footer"
import NavbarMenu from "@/components/navbar/NavbarMenu"

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <div className=" relative z-[99]">
        <Navbar />
      </div>
      <div className=" z-40 hidden xl:block">
        <NavbarMenu />
      </div>
      {children}
      <Footer />
    </main>
  )
}
