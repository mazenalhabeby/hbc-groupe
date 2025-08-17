export const publicRoutes = {
  home: "/",
}

export const dashboardRoutes = {
  dashboard: "/admin",
  categories: "/admin/categories",
  category: (id: string) => `/admin/categories/${id}`,
  categoryCreate: "/admin/categories/create",
  orders: "/admin/orders",
  products: "/admin/products",
  product: (id: string) => `/admin/products/${id}`,
  productEdit: (id: string) => `/admin/products/${id}/edit`,
  productCreate: "/admin/products/create",
  shipping: "/admin/shipping",
  users: "/admin/users",
  settings: "/admin/settings",
}

export const shoppingRoutes = {
  shop: "/shop",
  product: (slug: string) => `/shop/${slug}`,
  cart: "/shop/cart",
  checkout: "/shop/checkout",
  favorites: "/shop/favorites",
}
