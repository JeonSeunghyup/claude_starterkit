"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export const examplesNav = [
  { href: "/examples", label: "개요" },
  { href: "/examples/button", label: "Button" },
  { href: "/examples/dialog-sheet", label: "Dialog & Sheet" },
  { href: "/examples/menu", label: "Menu" },
  { href: "/examples/tabs-accordion", label: "Tabs & Accordion" },
  { href: "/examples/select", label: "Select" },
  { href: "/examples/tooltip-popover", label: "Tooltip & Popover" },
  { href: "/examples/alert", label: "Alert" },
  { href: "/examples/form", label: "Form" },
]

export function ExamplesSidebar() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-1 overflow-x-auto pb-2 md:w-48 md:shrink-0 md:flex-col md:overflow-visible md:pb-0">
      {examplesNav.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-lg px-2.5 py-1.5 text-sm font-medium whitespace-nowrap transition-colors hover:bg-muted",
              active
                ? "bg-muted text-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
