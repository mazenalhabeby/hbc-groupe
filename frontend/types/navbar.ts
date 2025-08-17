type LinkOnlyItem = {
  kind: "link"
  titleKey: string
  href: string
}

type SubLink = {
  titleKey: string
  href: string
  descriptionKey?: string
}

type PromoPanel =
  | {
      type: "basic"
      titleKey: string
      descriptionKey?: string
      href: string
    }
  ;

type DropdownItem = {
  kind: "dropdown"
  titleKey: string
  href?: string 
  subLinks: SubLink[]
  promoPanel?: PromoPanel
}

export type NavItem = LinkOnlyItem | DropdownItem
