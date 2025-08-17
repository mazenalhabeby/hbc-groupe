import * as z from "zod"

// Constants
export const unitTypes = ["cm", "in", "mm", "m"] as const
export const weightUnits = ["KG", "G", "LB", "OZ"] as const

export type UnitType = (typeof unitTypes)[number]
export type WeightUnit = (typeof weightUnits)[number]

// Schema
export const productSchema = z.object({
  name: z.string().min(3, "Product name is required"),
  slug: z
    .string()
    .min(3, "Slug is required")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase and hyphen-separated"
    ),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(1000),
  seoTitle: z.string().optional(),
  seoDesc: z.string().optional(),

  categoryId: z.string().min(1, "Category is required"),
  currency: z.string().min(1, "Currency is required"),

  price: z.coerce.number().gt(0, "Price is required"),
  sku: z.string().min(1, "SKU is required"),
  stock: z.coerce.number().nonnegative("Stock must be 0 or more"),

  weight: z.coerce.number().positive("Weight is required"),
  weightUnit: z.enum(weightUnits, {
    errorMap: () => ({message: "Select a valid weight unit"}),
  }),

  packages: z
    .array(
      z.object({
        length: z.coerce.number().positive(),
        breadth: z.coerce.number().positive(),
        width: z.coerce.number().positive(),
        unit: z.enum(unitTypes),
      })
    )
    .min(1, "At least one package dimension is required"),

  images: z.array(z.any()).min(2, "You must upload at least 2 images"),

  primaryImage: z.any().nullable(),

  variantFields: z.array(z.string()),

  variants: z
    .array(
      z.object({
        id: z.string().uuid().optional(),
        slug: z.string().optional(),
        name: z.string().optional(),
        sku: z.string().optional(),
        price: z.coerce.number().nonnegative().optional(),
        stock: z.coerce.number().nonnegative().optional(),
        attributes: z.record(z.string()),
      })
    )
    .optional(),
})

export type ProductFormType = z.infer<typeof productSchema>
