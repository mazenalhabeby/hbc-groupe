"use client"

import SectionHeading from "@/components/SectionHeading"
import StatItemCounter from "@/components/StatsCounter"
import Image from "next/image"
import {
  FaGear,
  FaArrowUpRightDots,
  FaHandshakeSimple,
  FaLayerGroup,
} from "react-icons/fa6"
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
import FeatureCard from "@/components/FeatureCard"
import {Separator} from "@/components/ui/separator"
import {FaInnosoft} from "react-icons/fa"
import {useTranslations} from "next-intl"

export default function AboutUs() {
  const t = useTranslations()
  const {ref, inView} = useInView({triggerOnce: true, threshold: 0.2})

  return (
    <section ref={ref} className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{x: -100, opacity: 0}}
          animate={inView ? {x: 0, opacity: 1} : {}}
          transition={{duration: 0.8, ease: "easeOut"}}
          className="w-full lg:w-1/2"
        >
          <SectionHeading
            subtitle={t("home.aboutus")}
            title={t("home.aboutusTitle")}
            backgroundText={t("home.aboutussubTitle")}
            backgourndTextsize="text-3xl xl:text-5xl"
            align="start"
          />
          <p className="text-gray-600 text-lg my-4 leading-relaxed max-w-xl">
            {t("home.aboutusDescription")}
          </p>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard
              icon={<FaInnosoft />}
              title={t("home.innoSoft")}
              description={t("home.innoSoftDescription")}
            />
            <FeatureCard
              icon={<FaArrowUpRightDots />}
              title={t("home.agrosubstrates")}
              description={t("home.agrosubstratesDescription")}
            />
            <FeatureCard
              icon={<FaHandshakeSimple />}
              title={t("home.globalMovement")}
              description={t("home.globalMovementDescription")}
            />
            <FeatureCard
              icon={<FaLayerGroup />}
              title={t("home.sustainableValue")}
              description={t("home.sustainableValueDescription")}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{x: 100, opacity: 0}}
          animate={inView ? {x: 0, opacity: 1} : {}}
          transition={{duration: 0.8, ease: "easeOut", delay: 0.2}}
          className="w-full lg:w-1/2"
        >
          <div className="relative flex flex-row gap-8 mb-8 z-30 justify-center">
            <StatItemCounter value={2000} label={t("home.satisfiedClients")} />
            <StatItemCounter value={750} label={t("home.projectsCompleted")} />
          </div>

          <div className="relative z-20 overflow-hidden drop-shadow-2xl rounded-3xl max-w-[600px]">
            <Image
              src="/images/img06.jpg"
              alt="About Us Image"
              width={600}
              height={600}
              className="rounded-3xl"
            />
            <div className="absolute -top-48 -md:top-28 -right-48 -md:right-28 w-[24rem] h-[24rem] animate-[spin_8s_linear_infinite]">
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-[50%] h-[50%] shadow-xl rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    />
                  </defs>
                  <text fontSize="8" fill="black">
                    <textPath href="#circlePath" startOffset="0">
                      HBC Business Performance • Best Business Performance
                      Assessments •
                    </textPath>
                  </text>
                </svg>
              </div>
              <FaGear className="text-[24rem] text-white absolute inset-0 z-0" />
            </div>
            <FaGear className="absolute top-44 -left-20 text-[20rem] text-white animate-[spin_8s_linear_infinite]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
