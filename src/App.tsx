import { useState } from 'react';
import Resume from './components/Resume';
import ParticlesBg from './components/ParticlesBg';
import MicroprogramerDeck from './pages/microprogramer/MicroprogramerDeck';

const INTERVIEW_DECK_PATH = '/interview/microprogramer';

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  if (path === INTERVIEW_DECK_PATH) {
    return (
      <MicroprogramerDeck
        onExit={() => {
          window.history.pushState({}, '', '/');
          setPath('/');
        }}
      />
    );
  }

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
