import { useEffect, useState } from 'react';
import { IconX } from '@tabler/icons-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';
import '../styles/ScreenshotLightbox.css';

interface ScreenshotLightboxProps {
  title: string;
  images: string[];
  open: boolean;
  onClose: () => void;
}

export default function ScreenshotLightbox({
  title,
  images,
  open,
  onClose,
}: ScreenshotLightboxProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const total = images.length;

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!open) return;

    api?.scrollTo(0, true);
    setCurrent(0);
  }, [open, api, images]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} 截圖`}
      onClick={onClose}
    >
      <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <h2 className="lightbox-title">{title}</h2>
          <button
            type="button"
            className="lightbox-close"
            onClick={onClose}
            aria-label="關閉"
          >
            <IconX stroke={1.5} aria-hidden="true" />
          </button>
        </div>

        <div className="lightbox-carousel">
          <Carousel opts={{ loop: true }} setApi={setApi} className="lightbox-embla">
            <CarouselPrevious />
            <CarouselContent>
              {images.map((src, i) => (
                <CarouselItem key={src}>
                  <div className="lightbox-slide">
                    <img
                      src={src}
                      alt={`${title} 截圖 ${i + 1} / ${total}`}
                      className="carousel-img"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>

        <div className="carousel-footer">
          <span className="carousel-counter">
            {current + 1} / {total}
          </span>
          <div className="carousel-dots" role="tablist" aria-label="截圖切換">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                className={i === current ? 'carousel-dot active' : 'carousel-dot'}
                aria-selected={i === current}
                aria-label={`第 ${i + 1} 張`}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
