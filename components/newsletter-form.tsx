"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"

const newsletterSchema = z.object({
  email: z.string().min(1, "이메일을 입력해 주세요.").email("올바른 이메일 형식이 아닙니다."),
})

type NewsletterValues = z.infer<typeof newsletterSchema>

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  })

  function onSubmit(values: NewsletterValues) {
    // 실제 전송 로직 없는 UI 데모 — 제출 시 토스트로 피드백만 보여준다.
    toast.success(`${values.email}로 구독이 완료되었습니다.`)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <Field data-invalid={!!errors.email}>
        <FieldLabel htmlFor="newsletter-email">이메일</FieldLabel>
        <FieldContent>
          <Input
            id="newsletter-email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          <FieldDescription>
            새 기능과 업데이트 소식을 받아보세요.
          </FieldDescription>
          <FieldError errors={errors.email ? [errors.email] : undefined} />
        </FieldContent>
      </Field>
      <Button type="submit" disabled={isSubmitting}>
        구독하기
      </Button>
    </form>
  )
}
