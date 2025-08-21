import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Logo() {
  const t = useTranslations();
  return (
    <Link href={"/"} className="flex items-center gap-1 cursor-pointer px-6">
      <Image src={logo} alt="Logo" width={64} height={64} priority />
      <h1 className="text-xl font-semibold text-red-500 uppercase">
        {t("group")}
      </h1>
    </Link>
  );
}
