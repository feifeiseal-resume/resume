import ProjectOverviewContent from '../components/ProjectOverviewContent';
import SlideLayout from '../components/SlideLayout';
import { josuiOverview } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function JosuiOverviewSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Project 01 · JOSUI" title={josuiOverview.subtitle}>
      <ProjectOverviewContent project={josuiOverview} />
    </SlideLayout>
  );
}
