"use client"
import {ImagesSlider} from "@/components/ui/images-slider"
import {motion} from "motion/react"
import {useTranslations} from "next-intl"
import React from "react"

export function HeroSection() {
  const t = useTranslations()
  const images = [
    "/images/img01.jpeg",
    "/images/img02.jpeg",
    "/images/img03.jpeg",
    "/images/img04.jpeg",
  ]
  return (
    <ImagesSlider className="h-[calc(100vh_-_136px)]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.h2 className="text-red-500 text-2xl tracking-widest font-bold uppercase text-center">
          {t("company")}
        </motion.h2>
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {t.rich("home.title", {
            br: () => <br />,
          })}
        </motion.p>
        <motion.p className="text-base md:text-xl text-center text-white/60 max-w-2xl px-4">
          {t("home.description")}
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-red-500/20 text-white mx-auto text-center rounded-full relative mt-4 flex flex-row items-center justify-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out hover:cursor-pointer">
          <span>{t("learnMore")}</span>
          <span>→</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  )
}
