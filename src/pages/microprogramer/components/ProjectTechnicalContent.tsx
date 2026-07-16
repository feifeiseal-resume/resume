import BulletList from './BulletList';
import FlowDiagram from './FlowDiagram';
import type { ProjectTechnical } from '../data';

export default function ProjectTechnicalContent({ data }: { data: ProjectTechnical }) {
  return (
    <div className="project-technical">
      <div className="project-overview-grid">
        <div>
          <h3 className="project-block-title">挑戰</h3>
          <BulletList items={data.challenges} />
        </div>
        <div>
          <h3 className="project-block-title">解法</h3>
          <BulletList items={data.solutions} />
        </div>
      </div>
      <FlowDiagram steps={data.flow} />
    </div>
  );
}
