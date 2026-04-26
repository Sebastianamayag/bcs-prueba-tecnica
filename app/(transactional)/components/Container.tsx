'use client';
import { Stepper } from '@/shared/components/Stepper/Stepp';
import { ReactNode } from 'react';
import { useAppStore } from '../store/client';

export const Container = ({ children }: { children: ReactNode }) => {
  const latsStepComppleted = useAppStore((state) => state.latsStepComppleted);
  return (
    <>
        <Stepper latsStepComppleted={latsStepComppleted} />
        {children}
    </>
  )
}
