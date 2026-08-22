/**
 * Return a Promise that resolves to the string results in event-loop order:
 * After calling runProbe(), the array should be ["sync", "micro", "macro"] timing-wise.
 * Implement sleep(ms) and mapInParallel(items, fn).
 */
export function sleep(ms: number): Promise<void> {
  throw new Error("not implemented");
}

export async function mapInParallel<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  throw new Error("not implemented");
}
