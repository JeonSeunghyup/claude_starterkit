"use client"

import { toast } from "sonner"

import type { VariantProps } from "class-variance-authority"

import { Button, buttonVariants } from "@/components/ui/button"

const variants: NonNullable<VariantProps<typeof buttonVariants>["variant"]>[] = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
]

const sizes: NonNullable<VariantProps<typeof buttonVariants>["size"]>[] = [
  "xs",
  "sm",
  "default",
  "lg",
]

export function ButtonVariantDemo() {
  return (
    <>
      {variants.map((variant) => (
        <Button
          key={variant}
          variant={variant}
          onClick={() => toast.info(`클릭됨: ${variant}`)}
        >
          {variant}
        </Button>
      ))}
    </>
  )
}

export function ButtonSizeDemo() {
  return (
    <>
      {sizes.map((size) => (
        <Button
          key={size}
          size={size}
          onClick={() => toast.info(`클릭됨: size=${size}`)}
        >
          size: {size}
        </Button>
      ))}
    </>
  )
}

export function ButtonStateDemo() {
  return (
    <>
      <Button onClick={() => toast.success("정상 버튼이 클릭되었습니다.")}>
        활성 버튼
      </Button>
      <Button disabled>비활성 버튼</Button>
    </>
  )
}
