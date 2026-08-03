import { Fragment } from 'react';

interface Props {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, pageCount, onChange }: Props) {
  if (pageCount <= 1) return null;
  const window = 1;
  const pages: (number | 'ellipsis')[] = [page];
  for (let off = 1; off <= window; off++) {
    if (page - off >= 1) pages.unshift(page - off);
    if (page + off <= pageCount) pages.push(page + off);
  }
  if (pages[0] !== 1) pages.unshift(1);
  if (pages[pages.length - 1] !== pageCount) pages.push(pageCount);
  const peek = (i: number): number => (typeof pages[i] === 'number' ? (pages[i] as number) : NaN);
  if (peek(0) && peek(1) && peek(1) - peek(0) > 1) pages.splice(1, 0, 'ellipsis');
  const lastIdx = pages.length - 1;
  if (peek(lastIdx - 1) && peek(lastIdx) && peek(lastIdx) - peek(lastIdx - 1) > 1) {
    pages.splice(lastIdx, 0, 'ellipsis');
  }

  return (
    <nav style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', padding: '1.5rem 0' }}>
      <Btn disabled={page <= 1} onClick={() => onChange(page - 1)} aria-label="Previous">
        ‹
      </Btn>
      {pages.map((p, i) =>
        p === 'ellipsis' ? (
          <span key={`e${i}`} style={{ color: 'var(--text-muted)', padding: '0 0.25rem' }}>
            …
          </span>
        ) : (
          <Fragment key={p}>
            <Btn active={p === page} onClick={() => onChange(p)}>
              {p}
            </Btn>
          </Fragment>
        ),
      )}
      <Btn disabled={page >= pageCount} onClick={() => onChange(page + 1)} aria-label="Next">
        ›
      </Btn>
    </nav>
  );
}

function Btn({
  children,
  active,
  disabled,
  onClick,
  'aria-label': label,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      style={{
        minWidth: '2.1rem',
        height: '2.1rem',
        padding: '0 0.4rem',
        borderRadius: 'var(--radius)',
        border: active ? '1px solid var(--brand)' : '1px solid var(--border)',
        background: active ? 'var(--brand)' : 'var(--surface)',
        color: active ? '#fff' : 'var(--text)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        fontSize: '0.85rem',
        fontWeight: 550,
      }}
    >
      {children}
    </button>
  );
}