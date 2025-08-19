"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NavigationMenuMain } from "./NavigationMenu";
import LanguageSwitcher from "../LanguageSwitcher";
import { Logo } from "./logo";

export default function NavbarMenu() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 160) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 transition-transform duration-500 ease-in-out z-[99] ",
        showNavbar ? "translate-y-0" : "-translate-y-full",
        "bg-white shadow-md"
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white" />

      <div
        className="
    pointer-events-none absolute inset-0 -z-10
    bg-gradient-to-bl from-blue-500 to-blue-800
    [clip-path:polygon(var(--left-top)_0,100%_0,100%_100%,var(--left-bottom)_100%)]
    [will-change:clip-path] [transform:translateZ(0)]"
        style={
          {
            ["--left-top" as string]: "clamp(120px, 18vw, 240px)",
            ["--left-bottom" as string]: "clamp(120px, 18vw, 180px)",
          } as React.CSSProperties
        }
      />

      <div className="flex flex-row items-center justify-between gap-4">
        <Logo />
        <div className="flex flex-1 items-end justify-end gap-12 px-12 py-1 text-white p-4">
          <div className="relative z-[100]">
            <NavigationMenuMain />
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
