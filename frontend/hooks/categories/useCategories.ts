import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import {categoryClient} from "@/lib/api/categories-api"
import {ZodiosError} from "@zodios/core"
import {uploadCategory} from "@/lib/api/upload"

interface Category {
  id: string
  name: string
}

export const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return await categoryClient.getCategories()
    },
  })

export const useCreateCategory = () => {
  const queryClient = useQueryClient()
  return useMutation<Category, ZodiosError, FormData>({
    mutationFn: uploadCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["categories"]})
    },
  })
}
