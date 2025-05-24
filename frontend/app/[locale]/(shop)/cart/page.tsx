"use client"

import {useCartStore} from "@/store/cartStore"
import React, {useState, useMemo} from "react"

import Link from "next/link"

import {FiShoppingCart} from "react-icons/fi"
import CartItemsSection from "@/components/sections/cart/CartItemsSection"
import CartSummarySide from "@/components/sections/cart/CartSummarySide"
import {useDelayedLoading} from "@/hooks/useDelayedLoading"
import CartPageSkeleton from "@/components/loading/CartPageSkeleton"
import {shoppingRoutes} from "@/lib/routes"

export default function CartPage() {
  const {items, removeFromCart, setQuantity} = useCartStore()
  const [selectedItems, setSelectedItems] = useState<string[]>(
    items.map((item) => item.id)
  )

  const selected = useMemo(
    () => items.filter((item) => selectedItems.includes(item.id)),
    [items, selectedItems]
  )

  const deliveryCost = 49
  const itemsTotal = selected.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const grandTotal = itemsTotal + deliveryCost

  const loading = useDelayedLoading(1500)
  if (loading) {
    return <CartPageSkeleton count={items.length || 2} />
  }

  return (
    <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[calc(100vh_-_210px)] lg:px-16">
      {items.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center gap-4 text-center">
          <FiShoppingCart className="text-gray-400 w-16 h-16" />
          <p className="text-gray-500 text-sm">No items in your cart yet.</p>
          <Link
            href={shoppingRoutes.shop}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <React.Fragment>
          {/* Cart Items */}
          <CartItemsSection
            items={items}
            removeFromCart={removeFromCart}
            setQuantity={setQuantity}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
          {/* Summary */}
          <CartSummarySide
            itemsTotal={itemsTotal}
            deliveryCost={deliveryCost}
            grandTotal={grandTotal}
            selectedItems={selectedItems}
          />
        </React.Fragment>
      )}
    </main>
  )
}
