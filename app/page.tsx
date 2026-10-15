import { Blocks, Moon, Paintbrush, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { NewsletterForm } from "@/components/newsletter-form"

const features = [
  {
    icon: Rocket,
    title: "Next.js 16 App Router",
    description:
      "Cache Components, 전역 타입 헬퍼 등 최신 App Router 컨벤션을 기반으로 구성되어 있습니다.",
  },
  {
    icon: Paintbrush,
    title: "Tailwind CSS v4",
    description:
      "OKLCH 색상 토큰과 디자인 시스템 변수가 app/globals.css에 미리 정의되어 있습니다.",
  },
  {
    icon: Moon,
    title: "다크모드 내장",
    description:
      "next-themes 기반으로 Light / Dark / System 전환이 깜빡임 없이 바로 동작합니다.",
  },
  {
    icon: Blocks,
    title: "shadcn/ui + Base UI",
    description:
      "Radix 대신 Base UI 프리미티브를 사용하는 최신 base-nova 스타일 컴포넌트를 제공합니다.",
  },
]

export default function Home() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            빠르게 시작하는 Next.js 스타터킷
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui가 미리 구성되어
            있어 아이디어를 바로 코드로 옮길 수 있습니다.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg">지금 시작하기</Button>
            <Button size="lg" variant="outline">
              문서 보기
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="features" className="border-t border-border">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              필요한 모든 것이 준비되어 있습니다
            </h2>
            <p className="mt-2 text-muted-foreground">
              설치는 끝났습니다. 바로 기능 개발을 시작하세요.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="mb-2 size-6 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="contact" className="border-t border-border">
        <Container className="flex flex-col items-center gap-6 text-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              뉴스레터 구독
            </h2>
            <p className="mt-2 text-muted-foreground">
              폼 검증(react-hook-form + zod)과 토스트(sonner) 연동 예시입니다.
            </p>
          </div>
          <NewsletterForm />
        </Container>
      </Section>
    </>
  )
}
