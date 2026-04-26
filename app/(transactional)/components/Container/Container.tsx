'use client';
import { ReactNode } from 'react';
import { useAppStore } from '../../store/client';
import { Stepper } from '../Stepper/Stepper';

export const Container = ({ children }: { children: ReactNode }) => {
  const latsStepComppleted = useAppStore((state) => state.latsStepComppleted);
  return (
    <>
        <Stepper latsStepComppleted={latsStepComppleted} />
        {children}
    </>
  )
}
