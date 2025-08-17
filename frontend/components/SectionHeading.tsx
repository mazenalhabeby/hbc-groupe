"use client"
import {cn} from "@/lib/utils"

interface SectionHeadingProps {
  subtitle: string
  title: string
  titleSize?: string
  backgroundText: string
  backgourndTextsize?: string
  align?: "start" | "center"
}

export default function SectionHeading({
  subtitle,
  title,
  titleSize = "text-4xl md:text-5xl",
  backgroundText,
  backgourndTextsize = "text-6xl",
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center"

  return (
    <div className={cn("relative", isCenter ? "text-center" : "text-left")}>
      <p className="text-red-500 font-bold text-lg z-10 relative">{subtitle}</p>

      <div
        className={cn(
          "absolute font-extrabold text-black/10 uppercase pointer-events-none select-none",
          isCenter ? "left-1/2 -translate-x-1/2 text-center" : "left-0",
          "top-4 w-full z-0 whitespace-nowrap leading-none",
          backgourndTextsize
        )}
      >
        {backgroundText}
      </div>

      <h2
        className={`relative z-10 font-extrabold text-[#0A0A31] leading-tight mt-2 lg:mt-4 ${titleSize} ${
          isCenter ? "mx-auto" : "ml-0"
        }`}
      >
        {title}
      </h2>

      <div
        className={cn(
          "mt-3 h-1 bg-red-500 w-16 z-10",
          isCenter ? "mx-auto" : "ml-0"
        )}
      />
    </div>
  )
}
