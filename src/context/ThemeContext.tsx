import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

type Theme = 'wolves' | 'lynx' | 'courage' | 'summit' | 'bucknell' | 'sounders' | 'reign' | 'ncfc' | 'jump' | 'athletics'
type Mode = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  mode: Mode
  setTheme: (theme: Theme) => void
  setMode: (mode: Mode) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('jump')
  const [mode, setModeState] = useState<Mode>('light')

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  const setMode = useCallback((m: Mode) => {
    setModeState(m)
    document.documentElement.setAttribute('data-mode', m)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
