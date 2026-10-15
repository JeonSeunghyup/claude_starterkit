# Next.js Starter Kit

빠르게 웹 개발을 시작할 수 있도록 구성한 Next.js 스타터킷입니다. 레이아웃, 다크모드, 자주 쓰는 UI 컴포넌트, 폼 검증, 토스트 알림까지 미리 연결되어 있어 클론 후 바로 기능 개발을 시작할 수 있습니다.

## 기술 스택

| 영역 | 선택 |
|---|---|
| 프레임워크 | [Next.js 16](https://nextjs.org) (App Router, Turbopack 기본) |
| 언어 | TypeScript (strict) |
| 스타일 | [Tailwind CSS v4](https://tailwindcss.com) |
| UI 컴포넌트 | [shadcn/ui](https://ui.shadcn.com) `base-nova` 스타일 — [Base UI](https://base-ui.com)(`@base-ui/react`) 기반, **Radix 아님** |
| 아이콘 | [lucide-react](https://lucide.dev) |
| 다크모드 | [next-themes](https://github.com/pacocoursey/next-themes) |
| 폼 검증 | [react-hook-form](https://react-hook-form.com) + [zod](https://zod.dev) + `@hookform/resolvers` |
| 토스트 | [sonner](https://sonner.emilkowal.ski) |
| 범용 훅 | [usehooks-ts](https://usehooks-ts.com) |
| 날짜 처리 | [date-fns](https://date-fns.org) |

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

```bash
npm run lint    # ESLint
npm run build   # 프로덕션 빌드
```

## 폴더 구조

```
app/                   라우트 전용 (페이지, 레이아웃, 전역 스타일)
├── layout.tsx          루트 레이아웃: ThemeProvider/TooltipProvider/Toaster, Header/Footer 조립
├── page.tsx            홈페이지 (Hero + Feature Cards + 폼 데모)
└── globals.css         Tailwind v4 + OKLCH 디자인 토큰(:root/.dark)

components/
├── theme-provider.tsx  next-themes Provider 래퍼
├── theme-toggle.tsx    Light/Dark/System 토글 (dropdown-menu 기반)
├── newsletter-form.tsx react-hook-form + zod + sonner 연동 폼 데모
├── layout/             페이지 구조 컴포넌트 (shadcn에 없어 직접 작성)
│   ├── header.tsx      로고 + NavigationMenu + ThemeToggle + 모바일 메뉴 트리거
│   ├── mobile-nav.tsx  Sheet 기반 모바일 메뉴
│   ├── footer.tsx      저작권/링크
│   ├── container.tsx   max-width + 좌우 padding wrapper
│   └── section.tsx     섹션 간 수직 spacing wrapper
└── ui/                 shadcn CLI가 생성하는 컴포넌트 전용 (수동 편집 지양)

lib/
├── utils.ts            cn 유틸 재노출
└── hooks/              프로젝트 전용/커스텀 훅 위치 (shadcn CLI가 필요 시 자동 생성)
```

## shadcn 컴포넌트 추가하기

이 프로젝트는 [base-nova](https://ui.shadcn.com) 레지스트리를 사용하며, 내부적으로 **Base UI**(Radix 아님) 프리미티브를 감싼 컴포넌트를 생성합니다. 새 컴포넌트가 필요하면:

```bash
npx shadcn add <component-name>
# 예: npx shadcn add table pagination
```

`components.json`의 `aliases`에 따라 `components/ui/`, 필요 시 `lib/hooks/`에 파일이 생성됩니다. 이미 설치된 컴포넌트(`button`, `card`, `dialog`, `dropdown-menu`, `select`, `tabs`, `sonner`, `tooltip`, `alert`, `sheet`, `navigation-menu`, `breadcrumb`, `accordion`, `popover`, `field`, `input`, `label`, `textarea`, `checkbox`, `switch`, `badge`, `avatar`, `separator`, `skeleton`)은 범용성이 높은 것 위주로 우선 설치했습니다. `table`, `calendar`, `command`, `carousel`, `chart` 등은 필요할 때 개별 추가하세요.

## 다크모드 커스터마이징

- 색상 토큰: `app/globals.css`의 `:root`(라이트)와 `.dark`(다크) 블록에 OKLCH 값으로 정의되어 있습니다. 브랜드 컬러로 교체하려면 이 값들을 수정하세요.
- 토글 동작: `components/theme-provider.tsx`가 `next-themes`를 감싸고, `app/layout.tsx`에서 `attribute="class" defaultTheme="system" enableSystem`으로 적용되어 있습니다.
- 토글 UI: `components/theme-toggle.tsx` — Light/Dark/System 3단 선택 드롭다운입니다.

## Next.js 16 관련 주의사항

이 프로젝트는 `next.config.ts`에서 **Cache Components**(`cacheComponents: true`, `partialPrefetching: true`)가 활성화되어 있습니다. 코드 작성 시 아래를 참고하세요.

- `cookies()`, `headers()`, `searchParams` 등 런타임 API를 쓰는 컴포넌트는 `<Suspense>`로 감싸거나 `"use cache"`로 캐싱해야 합니다.
- `Date.now()`, `Math.random()`처럼 비결정적인 값을 Server Component에서 직접 렌더링하면 빌드 에러가 발생합니다. `connection()` + `<Suspense>`로 요청마다 새로 계산하거나, `"use cache"`로 캐싱하세요 (예: `components/layout/footer.tsx`의 연도 표시).
- `middleware.ts`는 `proxy.ts`로 이름이 바뀌었고 Node.js 런타임 고정입니다. Edge 런타임이 필요하면 기존 `middleware.ts`를 사용하세요.
- `params`/`searchParams`는 모두 `Promise`이며, 수동으로 타입을 작성하는 대신 전역 타입 헬퍼 `PageProps<'/route'>`/`LayoutProps<'/route'>`를 사용하세요.
- 더 자세한 내용은 `node_modules/next/dist/docs/`를 참고하세요 (설치된 버전 기준 공식 문서).
