import {CategoryColumns} from "@/components/admin/category/CategoryColums"
import {DataTable} from "@/components/admin/data-table"
import {dashboardRoutes} from "@/lib/routes"
import {ChartColumnStacked, PlusCircleIcon} from "lucide-react"
import Link from "next/link"
import React from "react"

const AddCategoryButton = () => {
  return (
    <Link
      href={dashboardRoutes.categoryCreate}
      className="w-max bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 flex flex-row py-2 md:py-1 px-3 rounded-md gap-2 items-center justify-center text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 ml-2 md:ml-0"
    >
      <PlusCircleIcon className="h-4 w-4" />
      <span className="hidden md:inline-block">Add category</span>
    </Link>
  )
}

const NoResults = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
      <ChartColumnStacked className="w-6 h-6" />
      <div className="text-base font-semibold">No Categories found</div>
      <div className="text-sm">Add a new category to get started.</div>
    </div>
  )
}

export default function Page() {
  return (
    <React.Fragment>
      <main className="flex-1 overflow-y-auto">
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 p-4">
              <DataTable
                columns={CategoryColumns}
                data={[]}
                searchableColumns={["name"]}
                enableRowSelection
                otherComponents={<AddCategoryButton />}
                noResults={<NoResults />}
              />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}
