import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';
import ParticlesBg from './components/ParticlesBg';
import MicroprogramDeck from './pages/microprogram/MicroprogramDeck';

function ResumePage() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResumePage />} />
        <Route path="/interview/microprogram" element={<MicroprogramDeck />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
