import BookPage from "@/features/book/components/book-page"
import type { Route } from "./+types/book"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flip Book App" },
    {
      name: "description",
      content: "Flip book example with using react-pageflip",
    },
  ]
}

export default function Book() {
  return <BookPage />
}
