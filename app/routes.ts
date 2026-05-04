import { index, layout, type RouteConfig } from "@react-router/dev/routes"

export default [
  layout("layout/main-layout.tsx", [index("./routes/book.tsx")]),
] satisfies RouteConfig
