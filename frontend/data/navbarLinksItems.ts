import { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { kind: "link", titleKey: "navbar.home", href: "/" },
  { kind: "link", titleKey: "navbar.fireProtection", href: "/fire-protection" },
  { kind: "link", titleKey: "navbar.maintenance", href: "/maintenance" },
  { kind: "link", titleKey: "navbar.technology", href: "/technology" },
  { kind: "link", titleKey: "navbar.smartHome", href: "/smart-home" },
  

  // Example dropdown WITH a promo panel
  // {
  //   kind: "dropdown",
  //   titleKey: "navbar.shop",
  //   href: "/shop",
  //   promoPanel: {
  //     type: "basic",
  //     titleKey: "navbar.shopPromo.title", 
  //     descriptionKey: "navbar.shopPromo.description",
  //     href: "/shop",
  //   },
  //   subLinks: [
  //     {
  //       titleKey: "navbar.subtitle.shop.product.title",
  //       href: "/shop/products",
  //       descriptionKey: "navbar.subtitle.shop.product.description",
  //     },
  //     {
  //       titleKey: "navbar.subtitle.shop.services.title",
  //       href: "/shop/services",
  //       descriptionKey: "navbar.subtitle.shop.services.description",
  //     },
  //   ],
  // },

  // Example dropdown WITHOUT a promo panel
  // You can remove this whole item (or the Shop one above) without breaking anything.
  // {
  //   kind: "dropdown",
  //   titleKey: "navbar.resources",
  //   subLinks: [
  //     { titleKey: "navbar.resources.docs", href: "/docs", descriptionKey: "navbar.resources.docs.desc" },
  //     { titleKey: "navbar.resources.blog", href: "/blog", descriptionKey: "navbar.resources.blog.desc" },
  //   ],
  // },

  { kind: "link", titleKey: "navbar.careers", href: "/careers" },
  { kind: "link", titleKey: "navbar.contact", href: "/contact" },
]