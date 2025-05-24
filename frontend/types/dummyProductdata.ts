// types/product.ts
export interface Product {
  id: string
  name: string
  slug: string
  description: string
  seoTitle?: string
  seoDesc?: string
  categoryId: string
  currency: string
  price: number
  sku: string
  stock: number
  weight: number
  weightUnit: "KG" | "G" | "LB" | "OZ"
  packages: {
    length: number
    breadth: number
    width: number
    unit: "cm" | "in" | "mm" | "m"
  }[]
  images: (File | {id: string; url: string})[]
  variants?: {
    id: string
    slug: string
    name: string
    sku: string
    price: number
    stock: number
    attributes: Record<string, string>
  }[]
  variantFields: string[]
}
