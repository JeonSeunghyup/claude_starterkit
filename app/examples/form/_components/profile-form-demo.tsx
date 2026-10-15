"use client"

import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function ProfileFormDemo() {
  const [agreed, setAgreed] = useState(false)
  const [notifications, setNotifications] = useState(true)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!agreed) {
      toast.error("약관에 동의해야 저장할 수 있습니다.")
      return
    }
    toast.success("프로필이 저장되었습니다.")
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm">
      <FieldSet>
        <Field>
          <FieldLabel htmlFor="profile-name">이름</FieldLabel>
          <FieldContent>
            <Input id="profile-name" placeholder="홍길동" />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="profile-bio">소개</FieldLabel>
          <FieldContent>
            <Textarea id="profile-bio" placeholder="간단한 소개를 입력하세요." />
          </FieldContent>
        </Field>

        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="profile-notifications">알림 받기</FieldLabel>
            <FieldDescription>새 소식이 있을 때 알려드립니다.</FieldDescription>
          </FieldContent>
          <Switch
            id="profile-notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        </Field>

        <Field orientation="horizontal">
          <Checkbox
            id="profile-agree"
            checked={agreed}
            onCheckedChange={setAgreed}
          />
          <FieldLabel htmlFor="profile-agree" className="font-normal">
            이용약관에 동의합니다.
          </FieldLabel>
        </Field>

        <Button type="submit">저장</Button>
      </FieldSet>
    </form>
  )
}
