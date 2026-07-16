import { useEffect, useRef } from 'react';
import DeckControls from './components/DeckControls';
import { useDeckScale } from './hooks/useDeckScale';
import { useFullscreen } from './hooks/useFullscreen';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { usePresentation } from './hooks/usePresentation';
import { slideOutline } from './data';
import CoverSlide from './slides/CoverSlide';
import AboutSlide from './slides/AboutSlide';
import CareerTimelineSlide from './slides/CareerTimelineSlide';
import SkillsSlide from './slides/SkillsSlide';
import WorkflowSlide from './slides/WorkflowSlide';
import JosuiOverviewSlide from './slides/JosuiOverviewSlide';
import JosuiTechnicalSlide from './slides/JosuiTechnicalSlide';
import JosuiAiWorkflowSlide from './slides/JosuiAiWorkflowSlide';
import CityProbeOverviewSlide from './slides/CityProbeOverviewSlide';
import CityProbeTechnicalSlide from './slides/CityProbeTechnicalSlide';
import ComponentSystemSlide from './slides/ComponentSystemSlide';
import DesignThinkingSlide from './slides/DesignThinkingSlide';
import CollaborationSlide from './slides/CollaborationSlide';
import MotivationSlide from './slides/MotivationSlide';
import ThanksSlide from './slides/ThanksSlide';
import './styles/presentation.css';
import './styles/print.css';

const slideComponents = [
  CoverSlide,
  AboutSlide,
  CareerTimelineSlide,
  SkillsSlide,
  WorkflowSlide,
  JosuiOverviewSlide,
  JosuiTechnicalSlide,
  JosuiAiWorkflowSlide,
  CityProbeOverviewSlide,
  CityProbeTechnicalSlide,
  ComponentSystemSlide,
  DesignThinkingSlide,
  CollaborationSlide,
  MotivationSlide,
  ThanksSlide,
];

const total = slideComponents.length;

interface MicroprogramerDeckProps {
  onExit: () => void;
}

export default function MicroprogramerDeck({ onExit }: MicroprogramerDeckProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const { index, goTo, next, prev, first, last } = usePresentation(total);
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(containerRef);

  useDeckScale(containerRef, stageRef);

  const handlePrint = () => window.print();

  useKeyboardNavigation({
    onNext: next,
    onPrev: prev,
    onFirst: first,
    onLast: last,
    onToggleFullscreen: toggleFullscreen,
    onPrint: handlePrint,
  });

  useEffect(() => {
    const previousTitle = document.title;
    document.title = '面試簡報 · 微程式資訊 — 郭珮語';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="deck-root" ref={containerRef}>
      <div className="deck-stage" ref={stageRef}>
        {slideComponents.map((SlideComponent, i) => (
          <div key={slideOutline[i]?.id ?? i} className={`slide-slot${i === index ? ' is-active' : ''}`}>
            <SlideComponent index={i} total={total} />
          </div>
        ))}
      </div>
      <DeckControls
        index={index}
        total={total}
        isFullscreen={isFullscreen}
        onPrev={prev}
        onNext={next}
        onGoTo={goTo}
        onToggleFullscreen={toggleFullscreen}
        onPrint={handlePrint}
        onExit={onExit}
      />
    </div>
  );
}
