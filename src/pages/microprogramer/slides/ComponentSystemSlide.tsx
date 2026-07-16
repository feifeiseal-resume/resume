import BulletList from '../components/BulletList';
import SlideLayout from '../components/SlideLayout';
import Tag from '../components/Tag';
import { componentReuse } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function ComponentSystemSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Engineering" title="從單一功能到可重複使用的設計">
      <p className="project-background">{componentReuse.background}</p>
      <div className="project-overview-grid">
        <div>
          <h3 className="project-block-title">我的做法</h3>
          <BulletList items={componentReuse.approach} />
        </div>
        <div>
          <h3 className="project-block-title">可展示元件範例</h3>
          <div className="skills-tag-group">
            {componentReuse.examples.map((example) => (
              <Tag key={example} label={example} />
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
