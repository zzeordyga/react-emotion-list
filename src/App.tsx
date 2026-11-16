import { useEffect, useState } from 'react';
import { Header, Container, Toolbar, Eyebrow, Button, Stat } from '@/components/ui';
import { ProjectCard } from '@/components/ProjectCard';
import { SkeletonList } from '@/components/SkeletonList';
import { Pagination } from '@/components/Pagination';
import { useProjects } from '@/hooks/useProjects';
import { useThemeMode } from '@/theme';
import { SortType, type Project } from '@/types/project';

const PER_PAGE = 8;

export default function App() {
  const { dark, toggle } = useThemeMode();
  const { data, total, loading, error, filter, setFilter, sort, setSort } = useProjects();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [filter, sort]);

  const pageCount = Math.max(1, Math.ceil(data.length / PER_PAGE));
  const clampedPage = Math.min(page, pageCount);
  const offset = (clampedPage - 1) * PER_PAGE;
  const items = data.slice(offset, offset + PER_PAGE);

  return (
    <>
      <Header>
        <Container>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  height: '2rem',
                  width: '2rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--radius)',
                  background: 'var(--brand)',
                  color: '#fff',
                  fontWeight: 800,
                }}
              >
                r
              </span>
              <strong style={{ fontSize: '1.1rem' }}>project list</strong>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Stat label="Total" value={total} />
              <Button onClick={toggle} aria-label="Toggle theme">
                {dark ? '☀' : '☾'}
              </Button>
            </div>
          </div>
        </Container>
      </Header>

      <main style={{ padding: '2.5rem 0 1rem' }}>
        <Container>
          <div style={{ marginBottom: '1.25rem' }}>
            <Eyebrow>Projects</Eyebrow>
            <h1 style={{ margin: '0.3rem 0 0', fontSize: '1.75rem', fontWeight: 700 }}>
              Filter, sort and browse {total} projects
            </h1>
          </div>

          <Toolbar>
            <input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search by name, or use is:editing, before:2022-07-01, after:…"
              style={{
                flex: '1 1 18rem',
                minWidth: '14rem',
                padding: '0.6rem 0.9rem',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text)',
                fontSize: '0.9rem',
              }}
            />
            <select
              value={sort}
              onChange={(e) => setSort(Number(e.target.value) as SortType)}
              style={{
                padding: '0.6rem 0.9rem',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text)',
                fontSize: '0.9rem',
              }}
            >
              <option value={SortType.Default}>Sort: Default</option>
              <option value={SortType.Ascending}>Created ↑</option>
              <option value={SortType.Descending}>Created ↓</option>
            </select>
          </Toolbar>

          <div
            style={{
              marginTop: '1.5rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}
          >
            <HeaderRow />
            {error ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--danger)' }}>
                {error}
              </div>
            ) : loading ? (
              <SkeletonList />
            ) : items.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No projects match your filters.
              </div>
            ) : (
              items.map((p: Project) => <ProjectCard key={p.id} project={p} />)
            )}
          </div>

          <Pagination page={clampedPage} pageCount={pageCount} onChange={setPage} />
        </Container>
      </main>
    </>
  );
}

function HeaderRow() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '1rem',
        padding: '0.75rem 1.25rem',
        background: 'var(--surface-2)',
        borderBottom: '1px solid var(--border)',
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
      }}
    >
      <span>Name</span>
      <span>Type</span>
      <span>Status</span>
      <span>Created</span>
    </div>
  );
}