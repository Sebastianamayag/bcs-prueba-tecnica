import { useEffect, useState } from "react";
import { Fetch } from "@/shared/fetch/Fetch";
import { useGlobalUI } from "@/shared/hooks/useGlobalUI";
import { useAppStore } from "../../store/client";
import { DataResponse, SimulateResponse } from "../type/simulate.response";
import { useRouter } from "next/navigation";



export const useVerification = () => {

    const { setIsLoading, setToastMessage } = useGlobalUI();
    const [data, setData] = useState<DataResponse | null>(null);

    const numero_afiliacion = useAppStore((state) => state.numero_afiliacion);
    const datosBasicos = useAppStore((state) => state.datosBasicos);
    const datosFinancieros = useAppStore((state) => state.datosFinancieros);
    const setLastStep = useAppStore((state) => state.setLastStep);

    const route = useRouter();

    const handleGetSimulation = async() => {
        try {
            setIsLoading(true);

            const resp : SimulateResponse = await Fetch(
                `/api/aplications/${numero_afiliacion}/simulate`,
                process.env.NEXT_PUBLIC_API_POST_APPLICATIONS_SIMULATE ?? '',
                undefined,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        numero_afiliacion
                    }),
                }
            );
            setData(resp.data)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setToastMessage(error.message, 'error')
        } finally {
            setIsLoading(false);
        }
    };

    const handleEndAfiliation = async() => {
        try {
            setIsLoading(true);

            await Fetch(
                `/api/aplications/${numero_afiliacion}/finalize`,
                process.env.NEXT_PUBLIC_API_POST_APPLICATIONS_FINALIZE ?? '',
                undefined,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        numero_afiliacion
                    }),
                }
            );
            setToastMessage('Su proceso ha concluido correctamente', 'success')
            setLastStep(3);
            route.push('/home');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setToastMessage(error.message, 'error')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        handleGetSimulation();
    }, []);


    return {
        data,
        handleEndAfiliation,
        datosBasicos,
        datosFinancieros,
    }
}