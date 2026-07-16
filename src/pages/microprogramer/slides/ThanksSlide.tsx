import SlideLayout from '../components/SlideLayout';
import { contactItems, deckMeta } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function ThanksSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} title="Thank You" bare>
      <div className="thanks-slide">
        <h1 className="thanks-title">Thank You</h1>
        <p className="thanks-subtitle">Q&amp;A</p>
        <p className="thanks-name">
          {deckMeta.candidateName} / {deckMeta.candidateNameEn} · {deckMeta.role}
        </p>
        <ul className="thanks-contact">
          {contactItems.map((item) => (
            <li key={item.label}>
              <span className="thanks-contact-label">{item.label}</span>
              <span className="thanks-contact-value">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </SlideLayout>
  );
}
