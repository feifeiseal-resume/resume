interface FlowDiagramProps {
  steps: string[];
  direction?: 'row' | 'column';
}

export default function FlowDiagram({ steps, direction = 'row' }: FlowDiagramProps) {
  return (
    <div className={`flow-diagram flow-diagram--${direction}`}>
      {steps.map((step, i) => (
        <div className="flow-step" key={step}>
          <span className="flow-step-label">{step}</span>
          {i < steps.length - 1 && <span className="flow-step-arrow" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
