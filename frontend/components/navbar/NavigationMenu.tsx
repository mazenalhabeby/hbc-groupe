"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";
import { NAV_ITEMS } from "@/data";

export function NavigationMenuMain() {
  const t = useTranslations();

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
            );
          }

          const showContent =
            (item.subLinks && item.subLinks.length > 0) || item.promoPanel;

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
                          <div
                            className="relative flex h-full w-full select-none overflow-hidden rounded-md no-underline outline-none focus:shadow-md"
                            style={{
                              backgroundImage: `url(${item.promoPanel.imageUrl})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            {/* Scrim overlay for contrast */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0" />

                            {/* Content */}
                            <div className="relative z-10 mt-auto p-6">
                              {/* Glass card for text */}
                              <div className="max-w-[28rem] rounded-lg bg-black/35 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm">
                                <div className="mb-1 text-lg font-semibold leading-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                                  {t(item.promoPanel.titleKey)}
                                </div>

                                {item.promoPanel.descriptionKey && (
                                  <p className="text-sm leading-snug text-white/70 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] line-clamp-3">
                                    {t(item.promoPanel.descriptionKey)}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </li>
                    )}

                    {/* Sublinks (optional) */}
                    {item.subLinks?.map((sub) => (
                      <ListItem
                        key={sub.href}
                        href={sub.href}
                        title={t(sub.titleKey)}
                      >
                        {sub.descriptionKey ? t(sub.descriptionKey) : undefined}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
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
  );
});
ListItem.displayName = "ListItem";
