import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import type { AppTheme } from '@/theme';

export const Container = styled.div<AppTheme>`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Surface = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: color-mix(in srgb, var(--surface-2) 85%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
`;

export const Eyebrow = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

export const Button = styled.button<{ variant?: 'brand' | 'ghost' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: var(--radius);
  border: 1px solid transparent;
  font-weight: 550;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  ${({ variant = 'ghost' }) =>
    variant === 'brand'
      ? `background: var(--brand); color: #fff; &:hover { background: var(--brand-strong); }`
      : `background: transparent; border-color: var(--border); color: var(--text); &:hover { background: var(--surface-2); }`}
`;

export const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
`;

export function Stat({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
      <span style={{ color: 'var(--text-muted)' }}>{label}</span>
      <span style={{ fontWeight: 600 }}>{value}</span>
    </div>
  );
}