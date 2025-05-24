// components/ui/StatItemCounter.tsx
"use client"

import CountUp from "react-countup"
import {useInView} from "react-intersection-observer"
import {Be_Vietnam_Pro} from "next/font/google"

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
})

interface StatItemCounterProps {
  value: number
  label: string
  duration?: number
  suffix?: string
}

export default function StatItemCounter({
  value,
  label,
  duration = 2,
  suffix = "+",
}: StatItemCounterProps) {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div
      ref={ref}
      className={`text-center ${beVietnam.className} flex flex-col items-center justify-center`}
    >
      <div className="text-[2.5rem] font-bold text-red-500">
        <CountUp end={inView ? value : 0} {...{duration}} />
        <span>{suffix}</span>
      </div>
      <div className="text-black font-semibold xl:text-lg mt-2">{label}</div>
    </div>
  )
}
