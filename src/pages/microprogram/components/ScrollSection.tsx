import type { ReactNode } from 'react';

interface ScrollSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'soft' | 'dark';
}

export default function ScrollSection({ id, children, className = '', tone = 'default' }: ScrollSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-section scroll-section--${tone}${className ? ` ${className}` : ''}`}
      data-section-id={id}
    >
      <div className="scroll-section-inner">{children}</div>
    </section>
  );
}
