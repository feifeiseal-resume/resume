import SlideLayout from '../components/SlideLayout';
import Timeline from '../components/Timeline';
import { careerTimeline } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function CareerTimelineSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Career" title="從 PM 到前端工程師">
      <Timeline steps={careerTimeline} />
    </SlideLayout>
  );
}
