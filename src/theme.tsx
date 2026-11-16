import { type Theme } from '@emotion/react';
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

export const theme: Theme = {
  bg: 'var(--bg)',
  surface: 'var(--surface)',
  surface2: 'var(--surface-2)',
  border: 'var(--border)',
  text: 'var(--text)',
  muted: 'var(--text-muted)',
  brand: 'var(--brand)',
  brandStrong: 'var(--brand-strong)',
  accent: 'var(--accent)',
  danger: 'var(--danger)',
  success: 'var(--success)',
} as unknown as Theme;

export type AppTheme = typeof theme;

interface Ctx {
  dark: boolean;
  toggle: () => void;
}
const ThemeMode = createContext<Ctx>({ dark: false, toggle: () => {} });

export function AppProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
  }, []);
  const toggle = useCallback(() => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle('dark', next);
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch {
        // ignore
      }
      return next;
    });
  }, []);
  return (
    <ThemeMode.Provider value={{ dark, toggle }}>
      <ThemeMode.Consumer>{() => children}</ThemeMode.Consumer>
    </ThemeMode.Provider>
  );
}

export const useThemeMode = () => useContext(ThemeMode);