import HTMLFlipBook from "react-pageflip"
import { FlipPage } from "@/features/book/components/flip-page"

export function FlipBook() {
  return (
    <HTMLFlipBook
      width={360}
      height={600}
      showCover={true}
      data-density="soft"
      // biome-ignore lint/suspicious/noExplicitAny: library types are incomplete
      {...({} as any)}
    >
      {Array.from({ length: 8 }, (_, i) => i).map((value) => (
        <FlipPage key={value} number={value}>
          <div className="h-full">
            <div className="text-end">PAGE HEADER</div>
            <div className="h-9/10 bg-black/10">
              <div>Page content of flip book</div>
            </div>
            <div className="text-center">{value}</div>
          </div>
        </FlipPage>
      ))}
    </HTMLFlipBook>
  )
}
