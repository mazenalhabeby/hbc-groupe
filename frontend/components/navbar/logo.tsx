import Image from "next/image"
import logo from "@/assets/images/logo.png"
import {useTranslations} from "next-intl"

export function Logo() {
  const t = useTranslations()
  return (
    <div className="flex items-center gap-1 cursor-pointer px-6">
      <Image src={logo} alt="Logo" width={64} height={64} priority/>
      <h1 className="text-xl font-semibold text-red-500 uppercase">
        {t("group")}
      </h1>
    </div>
  )
}
