import { useEffect, type RefObject } from 'react';

const DESIGN_WIDTH = 1280;
const DESIGN_HEIGHT = 720;

/** 依舞台可用空間計算縮放比例，讓 1280×720 簡報畫布等比放大或縮小。 */
export function useDeckScale(
  rootRef: RefObject<HTMLElement | null>,
  stageRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;

    const updateScale = () => {
      // 用 content box（扣除 padding），避免縮放後超出 deck-stage
      const styles = getComputedStyle(stage);
      const padX = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
      const padY = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
      const width = Math.max(0, stage.clientWidth - padX);
      const height = Math.max(0, stage.clientHeight - padY);

      const rawScale = Math.min(width / DESIGN_WIDTH, height / DESIGN_HEIGHT);
      // 向下取到小數第三位，避免浮點誤差造成右側被裁切
      const scale = Number.isFinite(rawScale) ? Math.max(0, Math.floor(rawScale * 1000) / 1000) : 1;

      root.style.setProperty('--deck-scale', String(scale));
      // 外框寬高由同一組 scale 算出，與 transform 保持一致
      root.style.setProperty('--deck-frame-width', `${DESIGN_WIDTH * scale}px`);
      root.style.setProperty('--deck-frame-height', `${DESIGN_HEIGHT * scale}px`);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(stage);
    window.addEventListener('resize', updateScale);
    document.addEventListener('fullscreenchange', updateScale);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
      document.removeEventListener('fullscreenchange', updateScale);
    };
  }, [rootRef, stageRef]);
}
