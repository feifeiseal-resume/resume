import { useEffect } from 'react';

interface KeyboardHandlers {
  onNext: () => void;
  onPrev: () => void;
  onFirst: () => void;
  onLast: () => void;
  onToggleFullscreen: () => void;
  onPrint: () => void;
}

/** 面試簡報鍵盤操作：方向鍵／Space 換頁，Home／End 跳頁，F 全螢幕，P 列印。 */
export function useKeyboardNavigation(handlers: KeyboardHandlers) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          handlers.onNext();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          handlers.onPrev();
          break;
        case 'Home':
          event.preventDefault();
          handlers.onFirst();
          break;
        case 'End':
          event.preventDefault();
          handlers.onLast();
          break;
        case 'f':
        case 'F':
          handlers.onToggleFullscreen();
          break;
        case 'p':
        case 'P':
          event.preventDefault();
          handlers.onPrint();
          break;
        default:
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlers]);
}
