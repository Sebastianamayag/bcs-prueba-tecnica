import { ReactNode } from "react";

export type toastType = 'success' | 'error' 

export interface globalUIContextType {
  setIsLoading: (value: boolean) => void;
  setToastMessage: (toastMessage: string, type: toastType) => void;
}

export interface providerProps {
    children: ReactNode;
}