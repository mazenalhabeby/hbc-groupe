import {useMutation} from "@tanstack/react-query"
import {zodios} from "@/lib/api/zodios-client"
import {toast} from "sonner"
import type {ZodiosError} from "@zodios/core"
import type {z} from "zod"
import {productResponseSchema} from "@/schemas/productResponses.schema"
import {handleZodiosError} from "@/lib/handleZodiosError"

type CreateProductResponse = z.infer<typeof productResponseSchema>

/**
 * Hook to create a new product
 */
export const useCreateProduct = () => {
  return useMutation<CreateProductResponse, ZodiosError, FormData>({
    mutationFn: async (formData: FormData) => {
      return await zodios.createProduct(formData)
    },
    onSuccess: (data) => {
      toast.success(`Product "${data.name}" created successfully`)
    },
    onError: (err) => {
      const message = handleZodiosError(err)
      toast.error(message)
      throw new Error(message)
    },
  })
}
