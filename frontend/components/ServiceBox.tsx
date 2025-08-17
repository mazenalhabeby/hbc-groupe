"use client"
import {ReactNode, useState} from "react"
import {motion} from "framer-motion"
import Image from "next/image"

interface ServiceBoxProps {
  title: string
  subtitle: string
  description: string
  icon: ReactNode
  imageUrl: string
  iconBoxColor?: string
}

export default function ServiceBox({
  title,
  subtitle,
  description,
  icon,
  imageUrl,
  iconBoxColor = "bg-red-500",
}: ServiceBoxProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer group w-96"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <Image
        src={imageUrl}
        alt={title}
        width={250}
        height={250}
        className={`w-full h-72 object-cover transition-all duration-300 ${
          hovered ? "scale-105 blur-sm" : ""
        }`}
      />

      {/* Default Content */}
      {!hovered && (
        <div className="absolute bottom-0 left-0 flex flex-row items-center justify-around w-full">
          <div
            className={`${iconBoxColor} text-white w-24 h-20 flex items-center justify-center text-3xl `}
          >
            {icon}
          </div>
          <div className="bg-white p-4 flex flex-col flex-1 mx-4">
            <h3 className="text-xl font-bold text-black">{title}</h3>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>
        </div>
      )}

      {/* Hover Content */}
      {hovered && (
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 50}}
          className="absolute inset-0 bg-white/90 p-6 mr-8"
        >
          <div
            className={`absolute top-0 -right-8 ${iconBoxColor} shadow text-white p-4 text-4xl z-20`}
          >
            {icon}
          </div>

          <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <button
              className={`${iconBoxColor} text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300`}
            >
              Read More →
            </button>
          </div>
          <div
            className={`top-6 -right-10 ${iconBoxColor} w-12 h-12 rotate-[70deg] absolute z-10`}
          ></div>
        </motion.div>
      )}
    </div>
  )
}
