"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useTranslations } from "next-intl"
import { NAV_ITEMS } from "@/data"

export function NavigationMenuMain() {
  const t = useTranslations()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAV_ITEMS.map((item, i) => {
          if (item.kind === "link") {
            return (
              <NavigationMenuItem key={i}>
                <Link
                  href={item.href}
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  {t(item.titleKey)}
                </Link>
              </NavigationMenuItem>
            )
          }
          
          const showContent =
            (item.subLinks && item.subLinks.length > 0) || item.promoPanel

          return (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger className="bg-transparent">
                {t(item.titleKey)}
              </NavigationMenuTrigger>

              {showContent && (
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {/* Promo panel (optional, shown only if provided) */}
                    {item.promoPanel && item.promoPanel.type === "basic" && (
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href={item.promoPanel.href}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {t(item.promoPanel.titleKey)}
                            </div>
                            {item.promoPanel.descriptionKey && (
                              <p className="text-sm leading-tight text-muted-foreground">
                                {t(item.promoPanel.descriptionKey)}
                              </p>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    )}

                    {/* Sublinks (optional) */}
                    {item.subLinks?.map((sub) => (
                      <ListItem key={sub.href} href={sub.href} title={t(sub.titleKey)}>
                        {sub.descriptionKey ? t(sub.descriptionKey) : undefined}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// ---------- Shared list item ----------
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children ? (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          ) : null}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
