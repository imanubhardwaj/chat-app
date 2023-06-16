import { RefObject } from 'react';
import compact from 'lodash/compact';

export const scrollToBottom = (ref: RefObject<HTMLDivElement>) => {
  const el = ref.current;
  if (el) {
    el.scrollTop = el.scrollHeight;
  }
};

export function getUserInitials(fullName: string = ''): string | null {
  const parts = fullName.split(' ');
  const result = parts.length >= 3
    ? [parts[0][0], parts[2][0]].join('')
    : compact(parts).map((part) => part[0]).join('');

  return result === '' ? null : result.toUpperCase();
}
