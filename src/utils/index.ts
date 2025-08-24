import { Accessor, createEffect, createSignal } from "solid-js";

/**
 * Creates a debounced signal that mirrors the source signal, but with a specified delay.
 * @param initialValue The initial value of the source signal.
 * @param delay The delay in milliseconds after which the debounced signal will be updated.
 * @returns An array of three elements: the source signal accessor, the setter function for the source signal, and the debounced signal accessor.
 * @example
 * const [source, setSource, debounced] = createDebouncedSignal(0, 500);
 * setSource(1); // debounced() === 0
 * setTimeout(() => {
 *   console.log(debounced()); // 1
 * }, 1000);
 */

export const createDebouncedSignal = <T>(
  initialValue: T,
  delay: number
): [Accessor<T>, (value: T) => void, Accessor<T>] => {
  const [source, setSource] = createSignal<T>(initialValue);
  const [debounced, setDebounced] = createSignal<T>(initialValue);

  let timeoutId: number | undefined;

  createEffect(() => {
    const value = source();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      //@ts-ignore
      setDebounced(value);
    }, delay);
  });

  return [source, setSource, debounced] as const;
};
