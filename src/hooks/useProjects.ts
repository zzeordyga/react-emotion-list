import { useEffect, useMemo, useState } from 'react';
import { SortType, type Project } from '@/types/project';
import type { DbShape } from '@/types/project';

type Sort = SortType;
type Filter = string;

function compareDates(a: Project, b: Project, sort: Sort): number {
  if (sort === SortType.Ascending) return new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime();
  if (sort === SortType.Descending) return new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime();
  return 0;
}

function matchesFilter(p: Project, filter: Filter): boolean {
  if (!filter.trim()) return true;
  const tokens = filter.split(/\s+/);
  for (const tok of tokens) {
    const [key, val] = tok.split(':');
    if (val !== undefined) {
      const v = val.toLowerCase();
      if (key === 'is') {
        if (p.type.toLowerCase() !== v && p.status.toLowerCase() !== v) return false;
      } else if (key === 'not') {
        if (p.type.toLowerCase() === v || p.status.toLowerCase() === v) return false;
      } else if (key === 'before') {
        if (!(new Date(p.createdOn).getTime() < new Date(v).getTime())) return false;
      } else if (key === 'after') {
        if (!(new Date(p.createdOn).getTime() > new Date(v).getTime())) return false;
      }
    } else if (!p.name.toLowerCase().includes(tok.toLowerCase())) {
      return false;
    }
  }
  return true;
}

export function useProjects() {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>('');
  const [sort, setSort] = useState<Sort>(SortType.Default);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}db.json`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as DbShape;
        if (!cancelled) {
          setData(json.data ?? []);
          setLoading(false);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Failed to load');
          setLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const copy = data.filter((p) => matchesFilter(p, filter));
    if (sort !== SortType.Default) copy.sort((a, b) => compareDates(a, b, sort));
    return copy;
  }, [data, filter, sort]);

  return { data: filtered, total: data.length, loading, error, filter, setFilter, sort, setSort };
}