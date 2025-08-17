"use client"

import {Logo} from "@/components/navbar/logo"
import {Button} from "@/components/ui/button"
import {useTranslations} from "next-intl"

export function ContactSection() {
  const t = useTranslations()
  return (
    <section
      className="relative h-[80vh] bg-fixed bg-center flex items-center justify-center text-white"
      style={{backgroundImage: "url('/images/bg02.jpg')"}}
    >
      {/* Overlay for red gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 to-transparent w-[60%] z-20" />
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Content */}
      <div className="relative z-30 text-center px-4 flex flex-col items-center gap-6 justify-center h-full">
        <div className="flex justify-center items-center gap-2">
          <Logo />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          {t.rich("home.contactUsSectionTitle", {
            br: () => <br className="hidden md:block" />,
          })}
        </h2>
        <Button
          size={"lg"}
          className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded-md"
        >
          {t("home.contactUsSectionButton")}
        </Button>
      </div>
    </section>
  )
}
