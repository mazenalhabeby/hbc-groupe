import {z} from "zod"

export const categorySchema = z.object({
  name: z.string().min(2, "Name is required"),
  slug: z.string().min(2, "Slug is required"),
  description: z.string().optional(),
  image: z
    .any()
    .refine((file) => file instanceof File || file === undefined, {
      message: "Image must be a file",
    })
    .optional(),
})

export type CategoryFormType = z.infer<typeof categorySchema>
