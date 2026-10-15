"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const sides = ["top", "right", "bottom", "left"] as const

export function SheetDemo() {
  return (
    <>
      {sides.map((side) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline">{side}</Button>} />
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>{side} 방향 Sheet</SheetTitle>
              <SheetDescription>
                MobileNav 컴포넌트에서 이미 쓰이는 것과 같은 패턴입니다.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </>
  )
}
