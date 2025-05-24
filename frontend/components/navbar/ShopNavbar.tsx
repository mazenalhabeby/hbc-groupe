"use client"

import Link from "next/link"
import CartItemsPanel from "@/components/shop/CartItemsPanel"
import FavoriteItemsPanel from "@/components/shop/FavoriteItemsPanel"
import SearchCommand from "@/components/shop/SearchCommand"
import {shoppingRoutes} from "@/lib/routes"
import Image from "next/image"
import {logo} from "@/assets/images"

export default function ShopNavbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <Link
          href={shoppingRoutes.shop}
          className="text-2xl font-bold text-black"
        >
          <Image src={logo} alt="Logo" width={64} height={64} />
        </Link>
        {/* Actions */}
        <div className="flex items-center justify-center gap-8 px-4 lg:px-8">
          <SearchCommand />
          <CartItemsPanel />
          <FavoriteItemsPanel />
        </div>
      </div>
    </header>
  )
}
