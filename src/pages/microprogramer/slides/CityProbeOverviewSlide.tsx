import ProjectOverviewContent from '../components/ProjectOverviewContent';
import SlideLayout from '../components/SlideLayout';
import { cityProbeOverview } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function CityProbeOverviewSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Project 02 · City Probe" title={cityProbeOverview.subtitle}>
      <ProjectOverviewContent project={cityProbeOverview} />
    </SlideLayout>
  );
}
