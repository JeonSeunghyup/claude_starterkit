import { ExamplesBreadcrumb } from "@/components/examples/examples-breadcrumb"
import { DemoSection } from "@/components/examples/demo-section"
import { DialogDemo } from "./_components/dialog-demo"
import { SheetDemo } from "./_components/sheet-demo"

export default function DialogSheetExamplePage() {
  return (
    <div className="flex flex-col gap-6">
      <ExamplesBreadcrumb current="Dialog & Sheet" />
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Dialog & Sheet
        </h1>
        <p className="mt-1 text-muted-foreground">
          둘 다 모달형 오버레이입니다. Dialog는 화면 중앙에, Sheet는 가장자리에서 슬라이드로 열립니다.
        </p>
      </div>
      <DemoSection
        title="Dialog"
        description="화면 중앙에 열리는 모달. 버튼으로 열고 닫습니다."
      >
        <DialogDemo />
      </DemoSection>
      <DemoSection
        title="Sheet"
        description="가장자리에서 슬라이드로 열리는 패널. side별로 비교해 보세요."
      >
        <SheetDemo />
      </DemoSection>
    </div>
  )
}
