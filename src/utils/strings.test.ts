import { describe, expect, it } from 'vitest';
import { toTitleCase } from '@/utils/strings';

describe('toTitleCase', () => {
  it('capitalizes the first letter of each word', () => {
    expect(toTitleCase('editing')).toBe('Editing');
    expect(toTitleCase('POOL VILLA')).toBe('Pool Villa');
    expect(toTitleCase('educational')).toBe('Educational');
  });

  it('leaves empty and single letters alone', () => {
    expect(toTitleCase('')).toBe('');
    expect(toTitleCase('a')).toBe('A');
  });
});