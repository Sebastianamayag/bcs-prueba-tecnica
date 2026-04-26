'use client';
import { ReactNode } from 'react';
import { useAppStore } from '../../store/client';
import { Stepper } from '../Stepper/Stepper';

export const Container = ({ children }: { children: ReactNode }) => {
  const latsStepComppleted = useAppStore((state) => state.latsStepComppleted);
  return (
    <div style={{ backgroundColor: '#f9fafb', paddingTop: 40, paddingBottom: 20 }}>
        <Stepper latsStepComppleted={latsStepComppleted} />
        {children}
    </div>
  )
}
