"use client"

import { useTheme } from "next-themes"
import { useIsClient } from "usehooks-ts"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  // next-themes는 클라이언트에서만 실제 테마를 알 수 있으므로,
  // 마운트 전에는 아이콘을 그리지 않아 서버/클라이언트 불일치(FOUC)를 피한다.
  const mounted = useIsClient()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="테마 변경">
            {mounted ? (
              <>
                <Sun className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              </>
            ) : (
              <Skeleton className="size-4 rounded-full" />
            )}
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
