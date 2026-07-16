import { useCallback, useState } from 'react';

export function usePresentation(total: number) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (target: number) => {
      setIndex(Math.min(Math.max(target, 0), total - 1));
    },
    [total],
  );

  const next = useCallback(() => {
    setIndex((current) => Math.min(current + 1, total - 1));
  }, [total]);

  const prev = useCallback(() => {
    setIndex((current) => Math.max(current - 1, 0));
  }, []);

  const first = useCallback(() => setIndex(0), []);
  const last = useCallback(() => setIndex(total - 1), [total]);

  return { index, goTo, next, prev, first, last };
}
