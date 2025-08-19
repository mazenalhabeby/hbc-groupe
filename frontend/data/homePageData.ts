import {FaHome, FaLeaf, FaWrench} from "react-icons/fa"
import {FaFire} from "react-icons/fa6"

export const ProductItemSectionData = [
  {
    imageUrl: "/images/product01.jpg",
    title: "home.product.ecological_perlite",
    subtitle: "home.product.ecological_perlite_subtitle",
    price: 31,
    rating: 4,
  },
  {
    imageUrl: "/images/product02.jpg",
    title: "home.product.ultimate_raised_bed",
    subtitle: "home.product.ultimate_raised_bed_subtitle",
    price: 12,
    rating: 4.5,
  },
  {
    imageUrl: "/images/product03.jpg",
    title: "home.product.fabric_plaster",
    subtitle: "home.product.plaster_subtitle",
    price: 87,
    rating: 4,
  },
  {
    imageUrl: "/images/product04.jpg",
    title: "home.product.fills_screed",
    subtitle: "home.product.fills_screed_subtitle",
    price: 36,
    rating: 5,
  },
]
export type ProductItemType = typeof ProductItemSectionData[number]

export const ServicesSectionData = [
  {
    icon: FaLeaf,
    title: "home.services.greenConstruction.title",
    subtitle: "home.services.greenConstruction.subtitle",
    description: "home.services.greenConstruction.description",
    color: "bg-green-500",
    img: "/images/serviceImg02.jpg",
  },
  {
    icon: FaFire,
    title: "home.services.fireProtection.title",
    subtitle: "home.services.fireProtection.subtitle",
    description: "home.services.fireProtection.description",
    color: "bg-orange-500",
    img: "/images/serviceImg03.jpg",
  },
  {
    icon: FaWrench,
    title: "home.services.maintenance.title",
    subtitle: "home.services.maintenance.subtitle",
    description: "home.services.maintenance.description",
    color: "bg-blue-500",
    img: "/images/serviceImg04.jpg",
  },
  {
    icon: FaHome,
    title: "home.services.smartHome.title",
    subtitle: "home.services.smartHome.subtitle",
    description: "home.services.smartHome.description",
    color: "bg-purple-500",
    img: "/images/serviceImg05.jpg",
  },
]

export type ServiceItemType = typeof ServicesSectionData[number]
