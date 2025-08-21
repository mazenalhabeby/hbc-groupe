import { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { kind: "link", titleKey: "navbar.home", href: "/" },
  {
    kind: "dropdown",
    titleKey: "navbar.services",
    href: "",
    promoPanel: {
      type: "basic",
      titleKey: "navbar.servicesPromo.title",
      descriptionKey: "navbar.servicesPromo.description",
      imageUrl: "/images/maintenance.jpg",
    },
    subLinks: [
      {
        titleKey: "navbar.subLinks.maintenance.title",
        href: "/maintenance",
        descriptionKey: "navbar.subLinks.maintenance.description",
      },
      {
        titleKey: "navbar.subLinks.smartHome.title",
        href: "/smart-home",
        descriptionKey: "navbar.subLinks.smartHome.description",
      },
    ],
  },
  {
    kind: "dropdown",
    titleKey: "navbar.products",
    href: "",
    promoPanel: {
      type: "basic",
      titleKey: "navbar.productsPromo.title", 
      descriptionKey: "navbar.productsPromo.description",
      imageUrl: "/images/smartProduct.jpg",
    },
    subLinks: [
      {
        titleKey: "navbar.subLinks.fireProtection.title",
        href: "/fire-protection",
        descriptionKey: "navbar.subLinks.fireProtection.description",
      },
      {
        titleKey: "navbar.subLinks.securitySystems.title",
        href: "/technology",
        descriptionKey: "navbar.subLinks.securitySystems.description",
      },
    ],
  },
  { kind: "link", titleKey: "navbar.aboutCompany", href: "/about-company" },
  { kind: "link", titleKey: "navbar.careers", href: "/careers" },
  { kind: "link", titleKey: "navbar.contact", href: "/contact" },
]