import {getRequestConfig} from "next-intl/server"
import {hasLocale} from "next-intl"
import {routing} from "./routing"
import fs from "fs"
import path from "path"

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  const localeDir = path.join(process.cwd(), "messages", locale)

  const files = fs
    .readdirSync(localeDir)
    .filter((file) => file.endsWith(".json"))

  const messages: Record<string, unknown> = {}

  for (const file of files) {
    const filePath = path.join(localeDir, file)
    const key = file.replace(".json", "")
    const content = JSON.parse(fs.readFileSync(filePath, "utf-8"))

    if (key === "common") {
      Object.assign(messages, content)
    } else {
      messages[key] = content
    }
  }

  return {
    locale,
    messages,
  }
})
