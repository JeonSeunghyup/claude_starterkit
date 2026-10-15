"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">개요</TabsTrigger>
        <TabsTrigger value="usage">사용법</TabsTrigger>
        <TabsTrigger value="api">API</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        Tabs는 같은 영역에서 여러 콘텐츠를 전환해 보여줍니다.
      </TabsContent>
      <TabsContent value="usage">
        <code className="rounded bg-muted px-1.5 py-0.5">
          npx shadcn add tabs
        </code>
        로 설치할 수 있습니다.
      </TabsContent>
      <TabsContent value="api">
        Tabs, TabsList, TabsTrigger, TabsContent 네 가지 하위 컴포넌트로 구성됩니다.
      </TabsContent>
    </Tabs>
  )
}
