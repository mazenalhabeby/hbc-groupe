"use client"

import {FaHeart, FaRegHeart} from "react-icons/fa"
import {useFavoritesStore} from "@/store/favoritesStore"
import {cn} from "@/lib/utils"
import {Product} from "@/data/products"

type Props = {
  productId: string
  product: Product
  className?: string
}

export default function FavoriteButton({productId, product, className}: Props) {
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite)
  const isFavorite = useFavoritesStore((s) => s.isFavorite(productId))

  return (
    <button
      onClick={() => toggleFavorite(product)}
      className={cn(
        "hover:scale-110 transition border rounded-full p-2 bg-white text-gray-800 shadow-md flex items-center justify-center text-2xl",
        className
      )}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? (
        <FaHeart className="text-red-500" />
      ) : (
        <FaRegHeart className="text-red-500" />
      )}
    </button>
  )
}
