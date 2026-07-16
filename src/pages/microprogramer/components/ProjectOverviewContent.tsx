import BulletList from './BulletList';
import Tag from './Tag';
import type { ProjectOverview } from '../data';

export default function ProjectOverviewContent({ project }: { project: ProjectOverview }) {
  return (
    <div className="project-overview">
      <p className="project-background">{project.background}</p>
      <div className="project-overview-grid">
        <div>
          <h3 className="project-block-title">我的角色</h3>
          <BulletList items={project.role} />
        </div>
        <div>
          <h3 className="project-block-title">核心功能</h3>
          <BulletList items={project.features} />
        </div>
      </div>
      <div className="project-tech-row">
        {project.tech.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
