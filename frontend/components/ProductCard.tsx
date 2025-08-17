"use client"

import Image from "next/image"
import {FaStar, FaRegStar, FaStarHalfAlt} from "react-icons/fa"

interface ProductCardProps {
  imageUrl: string
  title: string
  subtitle: string
  oldPrice?: number
  price: number
  rating: number
}

export default function ProductCard({
  imageUrl,
  title,
  subtitle,
  oldPrice,
  price,
  rating,
}: ProductCardProps) {
  const stars = Array.from({length: 5}, (_, i) => {
    const diff = rating - i
    if (diff >= 1) return <FaStar key={i} className="text-orange-500" />
    if (diff >= 0.5)
      return <FaStarHalfAlt key={i} className="text-orange-500" />
    return <FaRegStar key={i} className="text-orange-500" />
  })

  return (
    <div className="relative mt-20">
      <div className="group relative w-72 rounded-xl shadow-lg overflow-hidden text-center bg-white pt-20 ">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

        {/* Content on top of background */}
        <div className="relative z-10 p-6 min-h-72 flex flex-col">
          <div>
            <h3 className="text-xl font-bold text-black group-hover:text-white transition">
              {title}
            </h3>
            <p className="text-gray-500 text-sm group-hover:text-red-500 transition">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col flex-1 justify-end">
            <hr className="my-4 border-t border-gray-200 group-hover:border-gray-500 transition" />
            <div className="text-sm font-semibold space-x-2 mb-2">
              {oldPrice && (
                <span className="line-through text-gray-600 group-hover:text-gray-400">
                  €{oldPrice.toFixed(2)}
                </span>
              )}
              <span className="text-red-500">€{price.toFixed(2)}</span>
            </div>
            <div className="flex justify-center text-sm mb-4">{stars}</div>
            <div className="bg-gray-300 text-gray-500 font-bold py-2 px-6 rounded-full cursor-not-allowed">
              Market opening soon
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center -top-20 left-15">
        <div className="rounded-full bg-white p-2 shadow-md">
          <Image
            src={imageUrl}
            alt={title}
            width={120}
            height={120}
            className="rounded-full w-40 h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
