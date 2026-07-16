import BulletList from '../components/BulletList';
import FlowDiagram from '../components/FlowDiagram';
import InfoCard from '../components/InfoCard';
import SlideLayout from '../components/SlideLayout';
import { collaborationRoles, problemSolvingFlow } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function CollaborationSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Collaboration" title="前端開發不只是完成畫面">
      <div className="skills-grid">
        {collaborationRoles.map((role) => (
          <InfoCard title={role.role} key={role.role}>
            <BulletList items={role.items} />
          </InfoCard>
        ))}
      </div>
      <FlowDiagram steps={problemSolvingFlow} />
    </SlideLayout>
  );
}
