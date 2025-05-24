export interface CategoryDataType {
  id: string
  name: string
  slug: string
  description?: string
  imageUrl?: string
  metadata?: Record<string, unknown>
  productsCount?: number
}
