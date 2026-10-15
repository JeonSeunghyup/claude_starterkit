import { ExamplesBreadcrumb } from "@/components/examples/examples-breadcrumb"
import { DemoSection } from "@/components/examples/demo-section"
import { PopoverDemo, TooltipDemo } from "./_components/tooltip-popover-demo"

export default function TooltipPopoverExamplePage() {
  return (
    <div className="flex flex-col gap-6">
      <ExamplesBreadcrumb current="Tooltip & Popover" />
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Tooltip & Popover
        </h1>
        <p className="mt-1 text-muted-foreground">
          둘 다 앵커 기반 팝업이지만 여는 방식이 다릅니다 — Tooltip은 hover, Popover는 click.
        </p>
      </div>
      <DemoSection title="Tooltip" description="아이콘에 마우스를 올려 보세요.">
        <TooltipDemo />
      </DemoSection>
      <DemoSection title="Popover" description="버튼을 클릭해 보세요.">
        <PopoverDemo />
      </DemoSection>
    </div>
  )
}
