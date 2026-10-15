import { NewsletterForm } from "@/components/newsletter-form"
import { ExamplesBreadcrumb } from "@/components/examples/examples-breadcrumb"
import { DemoSection } from "@/components/examples/demo-section"
import { ProfileFormDemo } from "./_components/profile-form-demo"

export default function FormExamplePage() {
  return (
    <div className="flex flex-col gap-6">
      <ExamplesBreadcrumb current="Form" />
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Form</h1>
        <p className="mt-1 text-muted-foreground">
          react-hook-form + zod 검증과 Base UI Field 조합 예시입니다.
        </p>
      </div>
      <DemoSection
        title="뉴스레터 폼"
        description="react-hook-form + zod + sonner 토스트 연동 (홈페이지와 동일한 컴포넌트)"
        className="flex-col items-stretch"
      >
        <NewsletterForm />
      </DemoSection>
      <DemoSection
        title="프로필 설정 폼"
        description="Input, Textarea, Switch, Checkbox를 Field로 묶은 예시"
        className="flex-col items-stretch"
      >
        <ProfileFormDemo />
      </DemoSection>
    </div>
  )
}
