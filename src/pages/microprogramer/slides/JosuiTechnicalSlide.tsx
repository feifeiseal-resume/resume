import ProjectTechnicalContent from '../components/ProjectTechnicalContent';
import SlideLayout from '../components/SlideLayout';
import { josuiTechnical } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function JosuiTechnicalSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Project 01 · JOSUI" title="如何讓主題色彩即時預覽與匯出">
      <ProjectTechnicalContent data={josuiTechnical} />
    </SlideLayout>
  );
}
