import { Outlet } from "react-router"
import Header from "@/shared/components/layout/header"

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center min-h-screen">
        <Outlet />
      </main>
    </>
  )
}
