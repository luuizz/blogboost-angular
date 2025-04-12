export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export function addIdsToArray<T>(array: T[]): (T & { id: string })[] {
  return array.map(item => ({
    ...item,
    id: generateId(),
  }));
}
