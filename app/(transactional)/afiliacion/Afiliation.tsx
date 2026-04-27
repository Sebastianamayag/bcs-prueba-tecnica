'use client';

import { HeroSection } from "./components/HeroSection";
import { Modal } from "./components/Modal";
import { useAfiliation } from "./hooks/useAfiliation";

export const Afiliation = () => {

  const { handleAbandon, handleCreateAfiliation, showModalResume, handleResume } = useAfiliation();

  return (
    <div style={{ height: '100dvh' }}>
      <HeroSection />
      <Modal
        isOpen={showModalResume}
        onResume={handleResume}
        onAbandon={handleAbandon} />
    </div>
  )
}
