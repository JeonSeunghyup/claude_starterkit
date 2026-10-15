import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Container } from "@/components/layout/container"
import { MobileNav } from "@/components/layout/mobile-nav"

const navLinks = [
  { href: "/", label: "홈" },
  { href: "#features", label: "기능" },
  { href: "#contact", label: "문의" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Starter Kit
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink render={<Link href={link.href} />}>
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
