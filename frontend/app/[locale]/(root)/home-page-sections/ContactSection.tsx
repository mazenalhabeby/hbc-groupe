"use client";

import { Logo } from "@/components/navbar/logo";

import { useTranslations } from "next-intl";
import Link from "next/link";

export function ContactSection() {
  const t = useTranslations();
  return (
    <section
      className="relative h-[80vh] bg-fixed bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/bg02.jpg')" }}
    >
      {/* Overlay for red gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 to-transparent w-[60%] z-20" />
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Content */}
      <div className="relative z-30 text-center px-4 flex flex-col items-center gap-6 justify-center h-full">
        <div className="flex justify-center items-center gap-2">
          <Logo />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          {t.rich("home.contactUsSectionTitle", {
            br: () => <br className="hidden md:block" />,
          })}
        </h2>
        <Link
          href="/contact"
          className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded-md px-6 py-3 transition-colors duration-300 shadow-lg hover:shadow-xl "
        >
          {t("home.contactUsSectionButton")}
        </Link>
      </div>
    </section>
  );
}
