"use client"

import { Info, Settings, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const tooltipSides = [
  { side: "top" as const, icon: Info, label: "위" },
  { side: "right" as const, icon: Settings, label: "오른쪽" },
  { side: "bottom" as const, icon: Share2, label: "아래" },
]

export function TooltipDemo() {
  return (
    <>
      {tooltipSides.map(({ side, icon: Icon, label }) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" size="icon" />}>
            <Icon />
          </TooltipTrigger>
          <TooltipContent side={side}>{label}에 표시되는 툴팁</TooltipContent>
        </Tooltip>
      ))}
    </>
  )
}

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">클릭해서 열기</Button>} />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>알림 설정</PopoverTitle>
          <PopoverDescription>
            Tooltip과 달리 Popover는 클릭해야 열리고, 클릭해야 닫힙니다.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}
