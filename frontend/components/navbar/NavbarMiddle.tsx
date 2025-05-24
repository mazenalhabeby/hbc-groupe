"use client"

import {useTranslations} from "next-intl"
import LanguageSwitcher from "../LanguageSwitcher"
import {contactDetails} from "./data"
import {Logo} from "./logo"
import {NavigationMenuMain} from "./NavigationMenu"

export function NavbarMiddle() {
  const t = useTranslations()
  return (
    <div className=" bg-white">
      <div className="flex flex-row justify-between items-center gap-4 ">
        <Logo />
        <div className=" flex-1 place-items-end relative">
          <div className="container mx-auto flex flex-row gap-6 items-center justify-end text-start text-gray-700 px-6 py-2">
            {contactDetails.map((info, index) => (
              <div
                key={index}
                className="flex flex-row gap-2 items-center justify-center text-sm"
              >
                <span className="text-red-500 text-2xl">
                  <info.icon />
                </span>
                <div>
                  <p className=" tracking-wider text-black">
                    {t(`${info.label}`)}
                  </p>
                  <p>{t(`${info.value}`)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-4"></div>
          <div className=" absolute w-full top-14 text-white font-bold px-6 py-2 flex justify-between items-center rounded-l-full z-50">
            <div className=" absolute bg-gradient-to-bl from-blue-500 to-blue-800 inset-0 clip-left-nav" />
            <div className="flex justify-around gap-6 px-12 py-1 text-lg w-full z-50">
              <NavigationMenuMain />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
