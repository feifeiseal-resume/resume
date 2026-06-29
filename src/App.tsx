import Resume from './components/Resume';
import ParticlesBg from './components/ParticlesBg';

export default function App() {
  return (
    <>
      <ParticlesBg
        color="#92a4e8"
        accentColor="#d8a4c8"
        backgroundColor="#080e22"
        backgroundColorLight="#2e4278"
      />
      <Resume />
    </>
  );
}
