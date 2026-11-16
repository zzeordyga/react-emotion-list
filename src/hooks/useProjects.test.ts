import { describe, expect, it } from 'vitest';
import { ProjectStatus, ProjectType, SortType, type Project } from '@/types/project';

import { renderHook, waitFor } from '@testing-library/react';
import { useProjects } from '@/hooks/useProjects';

function makeProjects(): Project[] {
  return [
    { id: '1', name: 'Alpha', status: ProjectStatus.Editing, type: ProjectType.Training, createdOn: '2022-06-01T00:00:00.000Z', archived: false },
    { id: '2', name: 'Beta', status: ProjectStatus.Completed, type: ProjectType.Testimonial, createdOn: '2022-06-10T00:00:00.000Z', archived: false },
    { id: '3', name: 'Gamma', status: ProjectStatus.Incomplete, type: ProjectType.Training, createdOn: '2022-07-05T00:00:00.000Z', archived: false },
  ];
}

describe('useProjects (filter hook unit)', () => {
  it('loads, filters by substring, and sorts by created date', async () => {
    const projects = makeProjects();
    const setProjects = (window as unknown as { __setProjects?: (p: Project[]) => void }).__setProjects;
    void setProjects;

    // Stub fetch before rendering the hook
    const original = globalThis.fetch;
    globalThis.fetch = (async () =>
      new Response(JSON.stringify({ data: projects }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })) as typeof fetch;

    const { result } = renderHook(() => useProjects());

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data.length).toBe(3);

    // Apply name filter
    result.current.setFilter('Beta');
    await waitFor(() => expect(result.current.data.length).toBe(1));
    expect(result.current.data[0].name).toBe('Beta');

    // Reset filter, sort ascending
    result.current.setFilter('');
    result.current.setSort(SortType.Ascending);
    await waitFor(() => expect(result.current.data[0].id).toBe('1'));

    // Descending
    result.current.setSort(SortType.Descending);
    await waitFor(() => expect(result.current.data[0].id).toBe('3'));

    // is:training filter
    result.current.setSort(SortType.Default);
    result.current.setFilter('is:training');
    await waitFor(() => expect(result.current.data.length).toBe(2));

    globalThis.fetch = original;
  });
});