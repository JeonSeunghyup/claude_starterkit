import { cn } from "@/lib/utils"

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn("py-16 sm:py-20", className)}
      {...props}
    />
  )
}

export { Section }
