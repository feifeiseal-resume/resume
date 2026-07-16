import { slideOutline } from '../data';

interface DeckControlsProps {
  index: number;
  total: number;
  isFullscreen: boolean;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
  onToggleFullscreen: () => void;
  onPrint: () => void;
  onExit: () => void;
}

export default function DeckControls({
  index,
  total,
  isFullscreen,
  onPrev,
  onNext,
  onGoTo,
  onToggleFullscreen,
  onPrint,
  onExit,
}: DeckControlsProps) {
  return (
    <div className="deck-controls" role="toolbar" aria-label="簡報控制列">
      <button type="button" className="deck-btn deck-btn--ghost" onClick={onExit} aria-label="返回履歷網站">
        ← 履歷
      </button>

      <button
        type="button"
        className="deck-btn"
        onClick={onPrev}
        disabled={index === 0}
        aria-label="上一頁"
      >
        ‹
      </button>

      <div className="deck-progress" aria-label={`目前第 ${index + 1} 頁，共 ${total} 頁`}>
        <div className="deck-progress-track">
          {slideOutline.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              className={`deck-progress-dot${i === index ? ' is-active' : ''}`}
              onClick={() => onGoTo(i)}
              title={slide.label}
              aria-label={`前往第 ${i + 1} 頁：${slide.label}`}
              aria-current={i === index}
            />
          ))}
        </div>
        <span className="deck-progress-count">
          {String(index + 1).padStart(2, '0')} / {total}
        </span>
      </div>

      <button
        type="button"
        className="deck-btn"
        onClick={onNext}
        disabled={index === total - 1}
        aria-label="下一頁"
      >
        ›
      </button>

      <button type="button" className="deck-btn deck-btn--ghost" onClick={onToggleFullscreen}>
        {isFullscreen ? '離開全螢幕' : '全螢幕'}
      </button>

      <button type="button" className="deck-btn deck-btn--accent" onClick={onPrint}>
        列印 / 匯出 PDF
      </button>
    </div>
  );
}
