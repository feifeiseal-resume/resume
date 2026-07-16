import FlowDiagram from '../components/FlowDiagram';
import SlideLayout from '../components/SlideLayout';
import { designThinking } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function DesignThinkingSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Mindset" title="我在寫程式前會先思考什麼">
      <div className="thinking-grid">
        {designThinking.aspects.map((aspect) => (
          <div className="thinking-card" key={aspect.title}>
            <span className="thinking-card-tag">{aspect.tag}</span>
            <p className="thinking-card-title">{aspect.title}</p>
            <p className="thinking-card-description">{aspect.description}</p>
          </div>
        ))}
      </div>
      <FlowDiagram steps={designThinking.flow} />
    </SlideLayout>
  );
}
