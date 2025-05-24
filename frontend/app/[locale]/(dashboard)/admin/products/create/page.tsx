"use client"

import ProductForm from "@/components/admin/product/form/ProductForm"
import {uploadProduct} from "@/lib/api/upload"
import {toast} from "sonner"

export default function Page() {
  const handleAddProduct = async (data: FormData) => {
    try {
      await uploadProduct(data)
      toast.success("Product successfully created!")
    } catch (error) {
      toast.error((error as Error).message || "Failed to create product")
    }
  }

  return <ProductForm onSubmitHandler={handleAddProduct} mode="add" />
}
