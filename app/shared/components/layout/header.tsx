import logoDark from "@/shared/assets/logo-dark.svg"
import logoLight from "@/shared/assets/logo-light.svg"
import { LocaleSelector } from "@/shared/components/header/locale-selector"
import { ThemeSelector } from "@/shared/components/header/theme-selector"

export default function Header() {
  return (
    <header className="fixed top-0 w-full py-1 px-36 flex justify-between items-center gap-9 border-b-2 border-foreground">
      <div className="w-60 max-w-[100vw] p-4 mr-18">
        <img
          src={logoLight}
          alt="React Router"
          className="block w-full dark:hidden"
        />
        <img
          src={logoDark}
          alt="React Router"
          className="hidden w-full dark:block"
        />
      </div>
      <div className="flex gap-8">
        <ThemeSelector />
        <LocaleSelector />
      </div>
    </header>
  )
}
