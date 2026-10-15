"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MenuDemo() {
  const [showStatusBar, setShowStatusBar] = useState(true)
  const [plan, setPlan] = useState("free")

  return (
    <div className="flex flex-col gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline">메뉴 열기</Button>} />
        <DropdownMenuContent>
          <DropdownMenuLabel>기본 항목</DropdownMenuLabel>
          <DropdownMenuItem>프로필</DropdownMenuItem>
          <DropdownMenuItem>설정</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            상태바 표시
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>요금제</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={plan} onValueChange={setPlan}>
            <DropdownMenuRadioItem value="free">Free</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="pro">Pro</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="team">Team</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <p className="text-sm text-muted-foreground">
        상태바: {showStatusBar ? "표시" : "숨김"} · 선택된 요금제: {plan}
      </p>
    </div>
  )
}
