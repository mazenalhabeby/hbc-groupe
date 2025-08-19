import { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { kind: "link", titleKey: "navbar.home", href: "/" },
  
  
  // Example dropdown WITH a promo panel
  {
    kind: "dropdown",
    titleKey: "services",
    href: "",
    promoPanel: {
      type: "basic",
      titleKey: "Industrial Services", 
      descriptionKey: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      href: "",
    },
    subLinks: [
      {
        titleKey: "Industrial Services",
        href: "/maintenance",
        descriptionKey: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        titleKey: "Smart Home",
        href: "/smart-home",
        descriptionKey: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    kind: "dropdown",
    titleKey: "products",
    href: "",
    promoPanel: {
      type: "basic",
      titleKey: "Industrial products", 
      descriptionKey: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      href: "",
    },
    subLinks: [
      {
        titleKey: "Fire Protection",
        href: "/fire-protection",
        descriptionKey: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        titleKey: "Sustainable Materials",
        href: "/technology",
        descriptionKey: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },

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
  { kind: "link", titleKey: "About company", href: "/" },

  { kind: "link", titleKey: "navbar.careers", href: "/careers" },
  { kind: "link", titleKey: "navbar.contact", href: "/contact" },
]