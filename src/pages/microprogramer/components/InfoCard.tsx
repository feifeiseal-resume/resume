import type { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="info-card">
      <h3 className="info-card-title">{title}</h3>
      <div className="info-card-body">{children}</div>
    </div>
  );
}
