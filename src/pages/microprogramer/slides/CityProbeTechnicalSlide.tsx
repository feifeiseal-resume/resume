import ProjectTechnicalContent from '../components/ProjectTechnicalContent';
import SlideLayout from '../components/SlideLayout';
import { cityProbeTechnical } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function CityProbeTechnicalSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Project 02 · City Probe" title="如何處理管理後台中的複雜資料與互動">
      <ProjectTechnicalContent data={cityProbeTechnical} />
    </SlideLayout>
  );
}
