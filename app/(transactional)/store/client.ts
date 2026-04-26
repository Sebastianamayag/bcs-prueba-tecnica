import { APP_STORE } from '@/shared/constants/keys'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ClientState } from './client.type'
import { initialState } from './client.data'


export const useAppStore = create<ClientState>()(
  persist(
    (set) => ({
      ...initialState,
      setLastStep: (step) => set({ latsStepComppleted: step }),
      setDatosBasicos: (data) => set((state) => ({
        datosBasicos: { ...state.datosBasicos, ...data }
      })),
      setDatosFinancieros: (data) => set((state) => ({
        datosFinancieros: { ...state.datosFinancieros, ...data }
      })),
      setTerminos : (data) => set({ terminos: data }),
      reset: () => set(initialState),
    }),
    {
      name: APP_STORE,
      partialize: (state) => ({ 
        latsStepComppleted: state.latsStepComppleted,
        datosBasicos: state.datosBasicos,
        datosFinancieros: state.datosFinancieros,
        terminos: state.terminos,
      }),
    }
  )
)
