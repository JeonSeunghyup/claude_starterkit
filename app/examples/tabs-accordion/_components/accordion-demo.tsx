"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "이 스타터킷은 어떤 기술 스택을 쓰나요?",
    answer: "Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui(Base UI 기반)로 구성되어 있습니다.",
  },
  {
    question: "다크모드는 어떻게 켜나요?",
    answer: "헤더의 테마 토글 버튼에서 Light/Dark/System 중 선택할 수 있습니다.",
  },
  {
    question: "새 컴포넌트는 어떻게 추가하나요?",
    answer: "npx shadcn add <component-name> 명령으로 추가할 수 있습니다.",
  },
]

export function AccordionDemo() {
  return (
    <Accordion className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
