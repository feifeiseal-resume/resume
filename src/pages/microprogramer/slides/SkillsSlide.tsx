import InfoCard from '../components/InfoCard';
import SlideLayout from '../components/SlideLayout';
import Tag from '../components/Tag';
import { skillCategories } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function SkillsSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Skills" title="我的技術能力">
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <InfoCard title={category.title} key={category.title}>
            <div className="skills-tag-group">
              {category.items.map((item) => (
                <Tag key={item.label} label={item.label} level={item.level} />
              ))}
            </div>
          </InfoCard>
        ))}
      </div>
    </SlideLayout>
  );
}
