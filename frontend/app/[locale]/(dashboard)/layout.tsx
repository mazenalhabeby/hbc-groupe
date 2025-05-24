import {AppSidebar} from "@/components/sidebar/app-sidebar"
import {SiteHeader} from "@/components/site-header"
import {Breadcrumbs} from "@/components/DynamicBreadCrumbs"
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar"
import ReactQueryProvider from "@/providers/ReactQueryProvider"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <Breadcrumbs />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </SidebarInset>
    </SidebarProvider>
  )
}
