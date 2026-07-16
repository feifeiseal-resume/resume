import type { TimelineStep } from '../data';

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <ol className="timeline">
      {steps.map((step) => (
        <li className="timeline-item" key={`${step.period}-${step.title}`}>
          <span className="timeline-period">{step.period}</span>
          <span className="timeline-dot" aria-hidden="true" />
          <div className="timeline-content">
            <p className="timeline-title">{step.title}</p>
            <p className="timeline-description">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
