import Link from "next/link"
import { format } from "date-fns"

import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/layout/container"

const footerLinks = [
  { href: "https://nextjs.org", label: "Next.js" },
  { href: "https://ui.shadcn.com", label: "shadcn/ui" },
  { href: "https://tailwindcss.com", label: "Tailwind CSS" },
]

export async function Footer() {
  "use cache"

  const year = format(new Date(), "yyyy")

  return (
    <footer className="border-t border-border">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Starter Kit. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            {footerLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 && (
                  <Separator orientation="vertical" className="h-4" />
                )}
              </span>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
