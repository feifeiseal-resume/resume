import BulletList from '../components/BulletList';
import SlideLayout from '../components/SlideLayout';
import { josuiAiWorkflow } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function JosuiAiWorkflowSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Project 01 · JOSUI" title="我如何使用 AI，但不依賴 AI">
      <div className="project-overview-grid">
        <div>
          <h3 className="project-block-title">使用 AI 的情境</h3>
          <BulletList items={josuiAiWorkflow.usage} />
        </div>
        <div>
          <h3 className="project-block-title">我的審查方式</h3>
          <BulletList items={josuiAiWorkflow.review} />
        </div>
      </div>
    </SlideLayout>
  );
}
