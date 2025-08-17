"use client"

import {FaMapMarkerAlt, FaPhoneAlt, FaFacebookF} from "react-icons/fa"
import {Logo} from "./navbar/logo"
import {FaLinkedin, FaXTwitter} from "react-icons/fa6"
import Image from "next/image"
import {useTranslations} from "next-intl"

export default function Footer() {
  const t = useTranslations()
  return (
    <footer className="bg-black text-white pt-16 pb-6 relative overflow-hidden">
      <Image
        src="/images/bg03.jpg"
        alt="Footer Image"
        fill
        className="object-cover opacity-40"
      />
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 z-10 relative">
        {/* Logo & About */}
        <div className="flex flex-col gap-4 justify-center">
          <Logo />
          <p className="text-sm text-gray-400">{t("footer.slogin")}</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {t("footer.newsletter")}
          </h3>
          <div className="w-10 h-1 bg-red-500 mb-4" />
          <p className="text-sm text-gray-400 mb-4">
            {t("footer.newsletterDesc")}
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-gray-800 text-sm px-4 py-3 flex-1 text-white outline-none"
            />
            <button className="bg-red-500 px-4 text-white text-xl">send</button>
          </div>
          <div className="flex gap-4 mt-6 text-xl text-gray-400">
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>

        {/* Official Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Official info</h3>
          <div className="w-10 h-1 bg-red-500 mb-4" />
          <div className="text-sm space-y-3">
            <p className="flex items-start gap-2 text-gray-400">
              <FaMapMarkerAlt className="mt-1" />
              Kapellenstrasse 30 4664
              <br /> Laakirchen Austria
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              <FaPhoneAlt /> +43 680 13 19 199
            </p>
            <p>
              <span className="font-semibold text-white">
                {t("footer.openHours")}:
              </span>
              <br />
              Mon – Thr: 8 am – 5 pm,
              <br />
              Fri : 8 am – 12 pm,
              <br />
              Saturday – Sunday: CLOSED
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400 z-10 relative">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-500">{t("company")} – </span>.{" "}
        {t("footer.allRights")}
      </div>

      {/* Background Effect (optional) */}
      <div className="absolute inset-0 bg-black/80 z-0" />
    </footer>
  )
}
