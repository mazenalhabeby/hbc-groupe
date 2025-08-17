"use client"

import {usePathname, useRouter} from "next/navigation"
import {Button} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {IoLanguageSharp} from "react-icons/io5"
import {useTranslations} from "next-intl"

const languages = [
  {code: "en", label: "English", flag: "🇬🇧", shortcut: "EN"},
  {code: "de", label: "Deutsch", flag: "🇩🇪", shortcut: "DE"},
  // Add more languages here
]

export default function LanguageSwitcher() {
  const pathname = usePathname()!
  const router = useRouter()
  const t = useTranslations()

  const currentLocale = pathname.split("/")[1]

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/")
    segments[1] = locale
    const newPath = segments.join("/")
    document.cookie = `NEXT_LOCALE=${locale}; path=/`
    router.push(newPath)
  }

  const currentLang =
    languages.find((l) => l.code === currentLocale) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className=" outline-0 ">
          <IoLanguageSharp />
          <span className="ml-2">{currentLang.shortcut}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-48 z-[99]" align="end">
        <DropdownMenuLabel className=" opacity-50">
          {t("chooseLang")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              disabled={lang.code === currentLocale}
            >
              {lang.label}
              <DropdownMenuShortcut>{lang.shortcut}</DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
