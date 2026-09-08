'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

type Theme = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyThemeClass(resolved: ResolvedTheme) {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(resolved)
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
  enableSystem = true,
}: {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark')

  // Initial sync from localStorage (and apply class)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey) as Theme | null
      const nextTheme: Theme = stored ?? defaultTheme
      setThemeState(nextTheme)

      const resolved: ResolvedTheme =
        nextTheme === 'system'
          ? enableSystem
            ? getSystemTheme()
            : 'dark'
          : nextTheme

      setResolvedTheme(resolved)
      applyThemeClass(resolved)
    } catch {
      // no-op
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // React to system changes if theme=system
  useEffect(() => {
    if (!enableSystem) return
    if (theme !== 'system') return

    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const resolved = getSystemTheme()
      setResolvedTheme(resolved)
      applyThemeClass(resolved)
    }

    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [enableSystem, theme])

  const setTheme = useCallback(
    (next: Theme) => {
      setThemeState(next)
      try {
        window.localStorage.setItem(storageKey, next)
      } catch {
        // no-op
      }

      const resolved: ResolvedTheme =
        next === 'system'
          ? enableSystem
            ? getSystemTheme()
            : 'dark'
          : next

      setResolvedTheme(resolved)
      applyThemeClass(resolved)
    },
    [enableSystem, storageKey],
  )

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
