import { forwardRef } from "react"
import { cn } from "@/shared/lib/utils"

export const pageColors = [
  "bg-amber-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-rose-100",
  "bg-purple-100",
  "bg-orange-100",
  "bg-teal-100",
  "bg-cyan-100",
]

type FlipPageProps = {
  number: number
  children?: React.ReactNode
}

export const FlipPage = forwardRef<HTMLDivElement, FlipPageProps>(
  ({ number, children }, ref) => {
    return (
      <div
        className={cn(pageColors[number], "text-black h-full p-2")}
        ref={ref}
      >
        {children}
      </div>
    )
  },
)
