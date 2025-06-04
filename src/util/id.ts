import { randomUUID } from 'crypto';

export function nextId() {
  return randomUUID();
}
