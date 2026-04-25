import { ReactNode } from "react";

export type toastType = 'success' | 'warn' 

export interface globalUIContextType {
  setIsLoading: (value: boolean) => void;
  setToastMessage: (toastMessage: string, type: toastType) => void;
}

export interface providerProps {
    children: ReactNode;
}