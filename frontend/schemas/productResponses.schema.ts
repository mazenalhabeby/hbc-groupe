import {z} from "zod"

export const productResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  seoTitle: z.string().optional(),
  seoDesc: z.string().optional(),
  categoryId: z.string(),
  currency: z.string(),
  price: z.number(),
  sku: z.string(),
  stock: z.number(),
  weight: z.number(),
  weightUnit: z.enum(["KG", "G", "LB", "OZ"]),
  packages: z.any(),
  variantFields: z.array(z.string()),
  variants: z.array(z.any()).optional(),
  images: z.array(
    z.object({
      id: z.string(),
      url: z.string(),
      position: z.number(),
    })
  ),
})
