import BulletList from '../components/BulletList';
import SlideLayout from '../components/SlideLayout';
import Tag from '../components/Tag';
import { aboutHighlights, aboutKeywords } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function AboutSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="About Me" title="關於我">
      <div className="two-col">
        <BulletList items={aboutHighlights} />
        <div className="keyword-cloud">
          {aboutKeywords.map((keyword) => (
            <Tag key={keyword} label={keyword} />
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
