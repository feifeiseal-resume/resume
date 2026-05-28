import Resume from './components/Resume';
import Vortex from './components/Vortex';

export default function App() {
  return (
    <>
      <Vortex
        particleCount={600}
        baseHue={230}
        backgroundColor="#080c1a"
        baseSpeed={0}
        rangeSpeed={1.2}
        baseRadius={1}
        rangeRadius={2}
        rangeY={120}
      />
      <Resume />
    </>
  );
}
