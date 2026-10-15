import { ExamplesBreadcrumb } from "@/components/examples/examples-breadcrumb"
import { DemoSection } from "@/components/examples/demo-section"
import { SelectDemo } from "./_components/select-demo"

export default function SelectExamplePage() {
  return (
    <div className="flex flex-col gap-6">
      <ExamplesBreadcrumb current="Select" />
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Select</h1>
        <p className="mt-1 text-muted-foreground">
          그룹, 구분선, 비활성 항목을 포함한 선택 상자입니다.
        </p>
      </div>
      <DemoSection title="기본 Select" description="값을 선택하면 아래에 바로 표시됩니다.">
        <SelectDemo />
      </DemoSection>
    </div>
  )
}
