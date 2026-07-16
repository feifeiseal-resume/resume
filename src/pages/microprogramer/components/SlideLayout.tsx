import type { ReactNode } from 'react';

interface SlideLayoutProps {
  index: number;
  total: number;
  kicker?: string;
  title: string;
  children: ReactNode;
  bare?: boolean;
}

export default function SlideLayout({ index, total, kicker, title, children, bare }: SlideLayoutProps) {
  return (
    <section className="slide" aria-hidden={false}>
      <div className="slide-inner">
        {!bare && (
          <header className="slide-header">
            {kicker && <p className="slide-kicker">{kicker}</p>}
            <h1 className="slide-title">{title}</h1>
          </header>
        )}
        <div className="slide-body">{children}</div>
        <p className="slide-page-number">
          {String(index + 1).padStart(2, '0')} / {total}
        </p>
      </div>
    </section>
  );
}
