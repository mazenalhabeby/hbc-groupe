"use client"

import {useEffect, useState} from "react"
import {cn} from "@/lib/utils"
import {NavigationMenuMain} from "./NavigationMenu"
import LanguageSwitcher from "../LanguageSwitcher"
import {Logo} from "./logo"

export default function NavbarMenu() {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY > 160) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed hidden top-0 left-0 right-0 transition-transform duration-500 ease-in-out z-40 ",
        showNavbar ? "translate-y-0" : "-translate-y-full",
        "bg-white shadow-md flex flex-row justify-between items-center gap-4"
      )}
    >
      <Logo />
      <div className="flex flex-1 bg-gradient-to-bl from-blue-500 to-blue-800 text-white font-bold px-6 py-3 justify-between items-center clip-left-nav">
        <div className="flex justify-around gap-6 px-12 py-1 text-lg w-full z-50">
          <NavigationMenuMain />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}
