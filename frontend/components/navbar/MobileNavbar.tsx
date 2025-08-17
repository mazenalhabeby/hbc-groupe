"use client"

import React, {useEffect, useState} from "react"
import {cn} from "@/lib/utils"
import {Logo} from "./logo"
import LanguageSwitcher from "../LanguageSwitcher"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {Menu} from "lucide-react"
import {NavigationMenuMain} from "./NavigationMenu"

export default function MobileNavbar() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 56)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "z-50 w-full px-4 transition-all duration-500 ease-in-out",
        isSticky
          ? "fixed top-0 bg-white shadow-md"
          : "absolute top-0 bg-white/90"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <Logo />

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenuMain />
          </div>

          <LanguageSwitcher />

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-md text-blue-900 hover:text-blue-600 transition"
                  aria-label="Open Menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-64 sm:w-72 bg-white z-[99]"
              >
                <ul>
                  <li>Menu Item 1</li>
                  <li>Menu Item 2</li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
