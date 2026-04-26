'use client';
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValues } from "./client.schema";
import { useAppStore } from "../../store/client";
import { ReactNode } from "react";

type ClientProviderProps = {
  children: ReactNode;
};

export function FormContextProvider({ children }: ClientProviderProps) {

  const basicData = useAppStore((state) => state.datosBasicos);
  const financialData = useAppStore((state) => state.datosFinancieros);
  const terminos = useAppStore((state) => state.terminos);

  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...basicData,
      ...financialData,
      terminos
    },
    mode: 'onChange',
    reValidateMode: 'onBlur'
  });

  return (
    <FormProvider {...methods}>
      {children}
    </FormProvider>
  );
}