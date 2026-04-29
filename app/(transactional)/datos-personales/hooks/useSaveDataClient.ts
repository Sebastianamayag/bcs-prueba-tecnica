import { useFormContext } from "react-hook-form";
import { useAppStore } from "../../store/client";
import { useGlobalUI } from "@/shared/hooks/useGlobalUI";
import { Fetch } from "@/shared/fetch/Fetch";
import { useRouter } from "next/navigation";

export const useSaveDataClient = () => {
  const { formState, trigger, watch } = useFormContext();
  const { isValid } = formState;
  const values = watch();

  const {
    setDatosBasicos,
    setDatosFinancieros,
    setTerminos,
    setLastStep,
    numero_afiliacion,
  } = useAppStore();
  const { setIsLoading, setToastMessage } = useGlobalUI();
  const router = useRouter();
  const parseData = () => {
    return {
      datosBasicos: {
        numero_documento: values.numero_documento,
        tipo_de_documento: values.tipo_de_documento,
        primer_nombre: values.primer_nombre,
        segundo_nombre: values.segundo_nombre,
        primer_apellido: values.primer_apellido,
        segundo_apellido: values.segundo_apellido,
      },
      datosFinancieros: {
        cargo: values.cargo,
        ingresos: values.ingresos,
        egresos: values.egresos,
        patrimonio: values.patrimonio,
      },
      terminos: values.terminos,
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return await trigger();
    try {
      setIsLoading(true);
      const { datosBasicos, datosFinancieros, terminos } = parseData();
      setDatosBasicos(datosBasicos);
      setDatosFinancieros(datosFinancieros);
      setTerminos(terminos);
      await Fetch(
        `/api/aplications/${numero_afiliacion}`,
        undefined,
        undefined,
        {
          method: "PATCH",
          body: JSON.stringify({
            numero_afiliacion,
            data: {
              datosBasicos,
              datosFinancieros,
              terminos,
            },
            scenario: process.env.NEXT_PUBLIC_API_PATCH_APPLICATIONS,
          }),
        },
      );
      setLastStep(2);
      router.push("/verificacion");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setToastMessage(error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
  };
};
