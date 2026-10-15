"use client"

import { useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-3">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-56">
          <SelectValue placeholder="프레임워크 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>프런트엔드</SelectLabel>
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="remix">Remix</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>기타</SelectLabel>
            <SelectItem value="astro">Astro</SelectItem>
            <SelectItem value="nuxt" disabled>
              Nuxt (준비 중)
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        선택된 값: {value ?? "없음"}
      </p>
    </div>
  )
}
