import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';

const READING_MODE_QUERY = '(max-width: 1024px), (max-height: 1099px)';

function isReadingMode() {
  return typeof window !== 'undefined' && window.matchMedia(READING_MODE_QUERY).matches;
}

/** 追蹤目前章節，並用滾輪 / 鍵盤穩定切換（避免 snap 卡住）。 */
export function useSectionNavigation(
  sectionIds: string[],
  containerRef: RefObject<HTMLElement | null>,
) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');
  const activeIdRef = useRef(activeId);
  const lockedRef = useRef(false);

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  const jumpTo = useCallback(
    (id: string) => {
      const root = containerRef.current;
      const target = document.getElementById(id);
      if (!root || !target) return;

      lockedRef.current = true;
      setActiveId(id);
      activeIdRef.current = id;

      root.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });

      window.setTimeout(() => {
        lockedRef.current = false;
      }, 750);
    },
    [containerRef],
  );

  const goBy = useCallback(
    (direction: 1 | -1) => {
      if (lockedRef.current) return;
      const currentIndex = sectionIds.indexOf(activeIdRef.current);
      if (currentIndex < 0) return;
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sectionIds.length - 1);
      if (nextIndex === currentIndex) return;
      jumpTo(sectionIds[nextIndex]!);
    },
    [jumpTo, sectionIds],
  );

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const onWheel = (event: WheelEvent) => {
      if (isReadingMode()) return;

      // 交給章節切換，避免內層 / snap 吃掉滾輪
      event.preventDefault();
      if (Math.abs(event.deltaY) < 8) return;
      goBy(event.deltaY > 0 ? 1 : -1);
    };

    let touchStartY = 0;
    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchEnd = (event: TouchEvent) => {
      if (isReadingMode()) return;

      const endY = event.changedTouches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - endY;
      if (Math.abs(delta) < 40) return;
      goBy(delta > 0 ? 1 : -1);
    };

    root.addEventListener('wheel', onWheel, { passive: false });
    root.addEventListener('touchstart', onTouchStart, { passive: true });
    root.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      root.removeEventListener('wheel', onWheel);
      root.removeEventListener('touchstart', onTouchStart);
      root.removeEventListener('touchend', onTouchEnd);
    };
  }, [containerRef, goBy]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== ' ') return;
      if (isReadingMode()) return;

      event.preventDefault();
      if (event.key === 'ArrowDown' || event.key === ' ') goBy(1);
      else goBy(-1);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goBy]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (lockedRef.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target.getAttribute('id');
        if (top) {
          setActiveId(top);
          activeIdRef.current = top;
        }
      },
      {
        root,
        threshold: [0.55],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [containerRef, sectionIds]);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0 });
  }, [containerRef]);

  return { activeId, jumpTo };
}
