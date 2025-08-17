// lib/api/categories-api.ts
import {z} from "zod"
import {makeApi, Zodios} from "@zodios/core"

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
})

export const api = makeApi([
  {
    method: "get",
    path: "/categories",
    alias: "getCategories",
    response: z.array(categorySchema),
  },
])

export const categoryClient = new Zodios(process.env.NEXT_PUBLIC_API_URL!, api)
