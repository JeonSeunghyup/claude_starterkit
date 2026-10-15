import { ExamplesBreadcrumb } from "@/components/examples/examples-breadcrumb"
import { DemoSection } from "@/components/examples/demo-section"
import {
  ButtonSizeDemo,
  ButtonStateDemo,
  ButtonVariantDemo,
} from "./_components/button-demo"

export default function ButtonExamplePage() {
  return (
    <div className="flex flex-col gap-6">
      <ExamplesBreadcrumb current="Button" />
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Button</h1>
        <p className="mt-1 text-muted-foreground">
          클릭하면 토스트로 피드백이 표시됩니다. 실제로 반응하는지 직접 눌러보세요.
        </p>
      </div>
      <DemoSection title="Variant" description="버튼의 색상/강조 스타일 종류">
        <ButtonVariantDemo />
      </DemoSection>
      <DemoSection title="Size" description="버튼 크기 종류">
        <ButtonSizeDemo />
      </DemoSection>
      <DemoSection
        title="State"
        description="비활성(disabled) 버튼과 정상 버튼의 차이를 비교해 보세요."
      >
        <ButtonStateDemo />
      </DemoSection>
    </div>
  )
}
