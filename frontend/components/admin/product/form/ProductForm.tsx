"use client"

import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {productSchema, ProductFormType} from "@/schemas/product.schema"
import {Button} from "@/components/ui/button"

import CategorySelector from "../../forms/products/CategorySelector"
import Pricing from "../../forms/products/Pricing"
import ShippingAndDelivery from "../../forms/products/ShippingAndDelivery"
import VariantManager from "../../forms/products/VariantManager"
import {toast} from "sonner"
import InventoryInputs from "../../forms/products/InventoryInputs"
import {useEffect} from "react"
import {useCategories} from "@/hooks/categories/useCategories"
import {ImageUploader} from "../../forms/ImageUploader"
import DetailsFormSection from "../../forms/DetailsFormSection"

interface ProductFormProps {
  initialData?: ProductFormType
  onSubmitHandler: (data: FormData) => Promise<void>
  mode?: "add" | "edit"
  isLoading?: boolean
}

export default function ProductForm({
  initialData,
  onSubmitHandler,
  mode,
  isLoading,
}: ProductFormProps) {
  const {data: categories = []} = useCategories()

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    getValues,
    formState,
  } = useForm<ProductFormType>({
    resolver: zodResolver(productSchema),
    mode: "onChange",
    defaultValues: initialData ?? {
      name: "",
      slug: "",
      description: "",
      categoryId: "<category-id>",
      currency: "$",
      price: 0,
      sku: "",
      stock: 0,
      weight: 0,
      weightUnit: "KG",
      packages: [],
      images: [],
      primaryImage: null,
      variants: [],
      variantFields: [],
    },
  })

  const name = watch("name")

  useEffect(() => {
    const slug = name
      ?.normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "")

    setValue("slug", slug || "")
  }, [name, setValue])

  const onError = (errors: typeof formState.errors) => {
    const firstFieldWithError = Object.entries(errors).find(
      ([, value]) => value?.message
    )
    if (firstFieldWithError) {
      const [field, errorObj] = firstFieldWithError
      // errorObj is of type FieldError | undefined
      toast.error(
        (errorObj && typeof errorObj === "object" && "message" in errorObj
          ? (errorObj as {message?: string}).message
          : undefined) ?? `Invalid field: ${field}`
      )
    } else {
      toast.error("Please fix the validation errors before submitting.")
    }
  }

  const onSubmit = async (data: ProductFormType) => {
    const formData = new FormData()

    formData.append("name", "iPhone 16 Pro")
    formData.append("slug", "iphone-16-pro")
    formData.append("description", "Latest iPhone with A18 Bionic")
    formData.append("seoTitle", "iPhone 16 Pro - Official")
    formData.append("seoDesc", "Pre-order the iPhone 16 Pro now")
    formData.append("categoryId", "clskq01ne0000xg1bq0oi1kfa")
    formData.append("currency", "USD")
    formData.append("price", "1299.99")
    formData.append("sku", "IPH16PRO")
    formData.append("stock", "50")
    formData.append("weight", "0.5")
    formData.append("weightUnit", "KG")

    formData.append(
      "packages",
      JSON.stringify([{length: 10, breadth: 5, width: 2, unit: "cm"}])
    )

    formData.append("variantFields", JSON.stringify(["color", "storage"]))

    data.images.forEach((img) => {
      formData.append("images", img)
    })
    try {
      const res = await onSubmitHandler(formData)
      console.log("data", res)
      toast.success("Product created!")
    } catch (error) {
      console.error("Upload failed:", error)
      toast.error((error as Error).message || "Failed to create product.")
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="max-w-screen-xl mx-auto px-4 py-10 space-y-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <DetailsFormSection<ProductFormType>
            register={register}
            setValue={setValue}
            fieldNames={{
              description: "description",
              name: "name",
              slug: "slug",
            }}
          />
          <CategorySelector
            categories={categories.map((c) => ({id: c.id, name: c.name}))}
            watch={watch}
            setValue={setValue}
          />
          <ShippingAndDelivery
            register={register}
            watch={watch}
            setValue={setValue}
            control={control}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ImageUploader<ProductFormType>
            label="Product Images"
            name="images"
            primaryName="primaryImage"
            required
            multiple
            setValue={setValue}
            watch={watch}
          />
          <Pricing watch={watch} setValue={setValue} />
          <InventoryInputs register={register} />
          <VariantManager
            control={control}
            setValue={setValue}
            getValues={getValues}
            currency={watch("currency")}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 justify-end pt-8 border-t">
        <Button type="submit" disabled={!formState.isValid || isLoading}>
          {mode === "edit" ? "Update Product" : "Add Product"}
        </Button>
      </div>
    </form>
  )
}
