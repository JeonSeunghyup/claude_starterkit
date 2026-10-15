import { ExamplesBreadcrumb } from "@/components/examples/examples-breadcrumb"
import { DemoSection } from "@/components/examples/demo-section"
import { MenuDemo } from "./_components/menu-demo"

export default function MenuExamplePage() {
  return (
    <div className="flex flex-col gap-6">
      <ExamplesBreadcrumb current="Menu" />
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Menu</h1>
        <p className="mt-1 text-muted-foreground">
          ThemeToggle에서 쓰이는 것과 같은 DropdownMenu 패턴입니다.
        </p>
      </div>
      <DemoSection
        title="DropdownMenu"
        description="일반 항목, 체크박스 항목, 라디오 그룹을 선택해 보세요."
      >
        <MenuDemo />
      </DemoSection>
    </div>
  )
}
