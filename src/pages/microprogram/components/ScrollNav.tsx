import { useEffect, useRef, useState, type RefObject } from 'react';
import { slideOutline } from '../data';

interface ScrollNavProps {
  activeId: string;
  rootRef: RefObject<HTMLElement | null>;
  onExit: () => void;
  onPrint: () => void;
  onJump: (id: string) => void;
}

const TOP_ZONE = 36;
const HIDE_DELAY = 450;

export default function ScrollNav({ activeId, rootRef, onExit, onPrint, onJump }: ScrollNavProps) {
  const [visible, setVisible] = useState(false);
  const hideTimerRef = useRef<number | null>(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const clearHideTimer = () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };

    const show = () => {
      clearHideTimer();
      setVisible(true);
    };

    const scheduleHide = () => {
      clearHideTimer();
      hideTimerRef.current = window.setTimeout(() => {
        if (!hoveringRef.current) setVisible(false);
      }, HIDE_DELAY);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (event.clientY <= TOP_ZONE || hoveringRef.current) show();
      else scheduleHide();
    };

    const onMouseLeave = () => {
      hoveringRef.current = false;
      scheduleHide();
    };

    // 觸控：點擊接近頂部時短暫顯示
    const onTouchStart = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY ?? 0;
      if (y <= TOP_ZONE + 12) show();
    };

    root.addEventListener('mousemove', onMouseMove);
    root.addEventListener('mouseleave', onMouseLeave);
    root.addEventListener('touchstart', onTouchStart, { passive: true });

    return () => {
      clearHideTimer();
      root.removeEventListener('mousemove', onMouseMove);
      root.removeEventListener('mouseleave', onMouseLeave);
      root.removeEventListener('touchstart', onTouchStart);
    };
  }, [rootRef]);

  return (
    <header
      className={`scroll-nav${visible ? ' is-visible' : ''}`}
      role="banner"
      onMouseEnter={() => {
        hoveringRef.current = true;
        setVisible(true);
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
        if (hideTimerRef.current !== null) window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = window.setTimeout(() => setVisible(false), HIDE_DELAY);
      }}
    >
      <button type="button" className="scroll-nav-btn scroll-nav-btn--ghost" onClick={onExit}>
        ← Resume
      </button>

      <nav className="scroll-nav-dots" aria-label="章節導覽">
        {slideOutline.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`scroll-nav-dot${activeId === item.id ? ' is-active' : ''}`}
            title={item.label}
            aria-label={item.label}
            aria-current={activeId === item.id}
            onClick={() => onJump(item.id)}
          />
        ))}
      </nav>

      <button type="button" className="scroll-nav-btn scroll-nav-btn--accent" onClick={onPrint}>
        <span className="scroll-nav-btn-full">Print / Export PDF</span>
        <span className="scroll-nav-btn-short">PDF</span>
      </button>
    </header>
  );
}
