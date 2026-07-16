import type { SkillLevel } from '../data';

interface TagProps {
  label: string;
  level?: SkillLevel;
}

export default function Tag({ label, level }: TagProps) {
  return <span className={`deck-tag${level ? ` deck-tag--${level}` : ''}`}>{label}</span>;
}
