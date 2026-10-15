import { CircleAlert, Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ExamplesBreadcrumb } from "@/components/examples/examples-breadcrumb"
import { DemoSection } from "@/components/examples/demo-section"

export default function AlertExamplePage() {
  return (
    <div className="flex flex-col gap-6">
      <ExamplesBreadcrumb current="Alert" />
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Alert</h1>
        <p className="mt-1 text-muted-foreground">
          상태를 알리는 정적 컴포넌트입니다. 상호작용 대신 variant 차이를 보여줍니다.
        </p>
      </div>
      <DemoSection title="Variant" description="default와 destructive" className="flex-col items-stretch gap-3">
        <Alert>
          <Terminal />
          <AlertTitle>배포가 완료되었습니다.</AlertTitle>
          <AlertDescription>
            변경 사항이 프로덕션에 반영되었습니다.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <CircleAlert />
          <AlertTitle>빌드에 실패했습니다.</AlertTitle>
          <AlertDescription>
            로그를 확인하고 다시 시도해 주세요.
          </AlertDescription>
        </Alert>
      </DemoSection>
    </div>
  )
}
