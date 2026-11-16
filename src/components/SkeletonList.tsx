export function SkeletonList({ count = 8 }: { count?: number }) {
  return (
    <div>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '1rem',
            padding: '0.9rem 1.25rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div style={{ height: '0.9rem', width: '70%', background: 'var(--surface-2)', borderRadius: 'var(--radius)', animation: 'pulse 1.5s ease-in-out infinite' }} />
          <div style={{ height: '0.9rem', width: '60%', background: 'var(--surface-2)', borderRadius: 'var(--radius)', animation: 'pulse 1.5s ease-in-out infinite' }} />
          <div style={{ height: '0.9rem', width: '50%', background: 'var(--surface-2)', borderRadius: 'var(--radius)', animation: 'pulse 1.5s ease-in-out infinite' }} />
          <div style={{ height: '0.9rem', width: '40%', background: 'var(--surface-2)', borderRadius: 'var(--radius)', animation: 'pulse 1.5s ease-in-out infinite' }} />
        </div>
      ))}
    </div>
  );
}