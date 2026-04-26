interface basicData{
    numero_documento: string;
    tipo_de_documento: string;
    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido:string;
    segundo_apellido: string;
}

interface financialData{
    cargo: string;
    ingresos: string;
    egresos: string;
    patrimonio: string;
}

export interface ClientState {
  latsStepComppleted: number;
  setLastStep: (step: number) => void;
  datosBasicos: basicData;
  datosFinancieros: financialData;
  terminos: string;
  setDatosBasicos: (data: Record<string, unknown>) => void;
  setDatosFinancieros: (data: Record<string, unknown>) => void;
  setTerminos: (data: string) => void;
  reset: () => void;
}