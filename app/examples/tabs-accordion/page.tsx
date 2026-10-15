import { ExamplesBreadcrumb } from "@/components/examples/examples-breadcrumb"
import { DemoSection } from "@/components/examples/demo-section"
import { TabsDemo } from "./_components/tabs-demo"
import { AccordionDemo } from "./_components/accordion-demo"

export default function TabsAccordionExamplePage() {
  return (
    <div className="flex flex-col gap-6">
      <ExamplesBreadcrumb current="Tabs & Accordion" />
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Tabs & Accordion
        </h1>
        <p className="mt-1 text-muted-foreground">
          둘 다 콘텐츠를 전환하거나 펼쳐서 보여주는 컴포넌트입니다.
        </p>
      </div>
      <DemoSection
        title="Tabs"
        description="클릭해서 탭을 전환해 보세요."
        className="flex-col items-stretch"
      >
        <TabsDemo />
      </DemoSection>
      <DemoSection
        title="Accordion"
        description="클릭해서 항목을 펼치거나 접어보세요."
        className="flex-col items-stretch"
      >
        <AccordionDemo />
      </DemoSection>
    </div>
  )
}
