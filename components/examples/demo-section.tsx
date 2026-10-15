import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

function DemoSection({
  title,
  description,
  children,
  className,
}: {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className="flex flex-col gap-3">
      <div>
        <h2 className="text-lg font-medium">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <Card>
        <CardContent className={cn("flex flex-wrap items-center gap-4", className)}>
          {children}
        </CardContent>
      </Card>
    </section>
  )
}

export { DemoSection }
