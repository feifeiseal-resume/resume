import BulletList from '../components/BulletList';
import SlideLayout from '../components/SlideLayout';
import { motivation } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function MotivationSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Motivation & Plan" title="我期待的下一個階段">
      <div className="project-overview-grid">
        <div>
          <h3 className="project-block-title">為什麼想加入微程式</h3>
          <BulletList items={motivation.reasons} />
        </div>
        <div>
          <h3 className="project-block-title">我的職涯規劃</h3>
          <BulletList items={motivation.careerPlan} />
        </div>
      </div>
      <p className="motivation-pitch">{motivation.pitch}</p>
    </SlideLayout>
  );
}
