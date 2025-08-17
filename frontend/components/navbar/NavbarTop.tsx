"use client"
import Link from "next/link"
import {TopNavbarData} from "./data"
import {useTranslations} from "next-intl"

export function NavbarTop() {
  const t = useTranslations()
  return (
    <div className="bg-black text-white px-6 py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="uppercase tracking-widest text-sm hidden md:block">
          <span>{t("welcome")}</span>{" "}
          <span className="text-blue-400">{t("company")}</span>
        </div>
        <div className="flex gap-2 items-center justify-end flex-1">
          {TopNavbarData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 after:content-['|'] after:mx-2 last:after:content-none text-sm lg:text-lg first:text-base lg:first:text-2xl "
            >
              <Link
                href={item.url}
                className=" hover:text-red-500 opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
