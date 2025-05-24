import {NavbarTop} from "./NavbarTop"
import {NavbarMiddle} from "./NavbarMiddle"
import React from "react"
import MobileNavbar from "./MobileNavbar"

export default function Navbar() {
  return (
    <header className="shadow-md relarive">
      <NavbarTop />
      <div className="hidden xl:block relative">
        <NavbarMiddle />
      </div>
      <div className="block xl:hidden relative">
        <MobileNavbar />
      </div>
    </header>
  )
}
