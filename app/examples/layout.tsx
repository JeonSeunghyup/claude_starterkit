import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { ExamplesSidebar } from "@/components/examples/examples-sidebar"

export default function ExamplesLayout({ children }: LayoutProps<"/examples">) {
  return (
    <Section className="py-10 sm:py-12">
      <Container className="flex flex-col gap-8 md:flex-row">
        <ExamplesSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </Container>
    </Section>
  )
}
