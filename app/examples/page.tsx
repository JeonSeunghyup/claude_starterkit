import Link from "next/link"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const groups = [
  {
    href: "/examples/button",
    title: "Button",
    description: "variant와 size 조합, 클릭 피드백, disabled 상태 비교",
  },
  {
    href: "/examples/dialog-sheet",
    title: "Dialog & Sheet",
    description: "모달형 오버레이를 열고 닫는 상호작용",
  },
  {
    href: "/examples/menu",
    title: "Menu",
    description: "DropdownMenu의 Item, Checkbox, Radio 선택",
  },
  {
    href: "/examples/tabs-accordion",
    title: "Tabs & Accordion",
    description: "탭 전환과 아코디언 펼침/접힘",
  },
  {
    href: "/examples/select",
    title: "Select",
    description: "그룹, 비활성 항목을 포함한 선택 상자",
  },
  {
    href: "/examples/tooltip-popover",
    title: "Tooltip & Popover",
    description: "hover로 뜨는 Tooltip과 click으로 여는 Popover 비교",
  },
  {
    href: "/examples/alert",
    title: "Alert",
    description: "상태를 알리는 정적 알림 variant",
  },
  {
    href: "/examples/form",
    title: "Form",
    description: "react-hook-form + zod 검증과 토스트 피드백",
  },
]

export default function ExamplesIndexPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          컴포넌트 예제
        </h1>
        <p className="mt-1 text-muted-foreground">
          스타터킷에 포함된 shadcn/ui 컴포넌트의 실제 동작을 확인하세요.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <Link key={group.href} href={group.href}>
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
