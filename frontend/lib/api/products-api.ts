import {productResponseSchema} from "@/schemas/productResponses.schema"
import {makeApi, Zodios} from "@zodios/core"
import {z} from "zod"

export const api = makeApi([
  {
    method: "post",
    path: "/products",
    alias: "createProduct",
    description: "Create new product",
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.any(),
      },
    ],
    response: productResponseSchema,
  },
])

export const productClient = new Zodios(process.env.NEXT_PUBLIC_API_URL!, api)
