const STORAGE_KEY = 'cssteach-progress';

interface ProgressStore {
  completed: Record<string, boolean>;
}

function read(): ProgressStore {
  if (typeof window === 'undefined') return { completed: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completed: {} };
    return JSON.parse(raw) as ProgressStore;
  } catch {
    return { completed: {} };
  }
}

function write(store: ProgressStore): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Quota exceeded or unavailable — silently ignore
  }
}

export function markCompleted(challengeId: string): void {
  const store = read();
  store.completed[challengeId] = true;
  write(store);
}

export function isCompleted(challengeId: string): boolean {
  return read().completed[challengeId] === true;
}

export function getCompletedIds(): Set<string> {
  return new Set(Object.keys(read().completed));
}
