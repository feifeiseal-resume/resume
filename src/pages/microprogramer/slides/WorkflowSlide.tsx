import SlideLayout from '../components/SlideLayout';
import { workflowSteps } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function WorkflowSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Workflow" title="從需求到正式上線">
      <ol className="workflow-grid">
        {workflowSteps.map((step, i) => (
          <li className="workflow-step" key={step.title}>
            <span className="workflow-step-index">{String(i + 1).padStart(2, '0')}</span>
            <p className="workflow-step-title">{step.title}</p>
            <p className="workflow-step-description">{step.description}</p>
          </li>
        ))}
      </ol>
    </SlideLayout>
  );
}
