import { useGlobalUI } from "@/shared/hooks/useGlobalUI";
import { useRouter } from "next/navigation";
import { useAppStore } from "../../store/client";
import { Fetch } from "@/shared/fetch/Fetch";
import { APP_STORE } from "@/shared/constants/keys";
import { CreateAfiliationResponse } from "./afiliation.type";
import { useState } from "react";

export const useAfiliation = () => {

    const { setIsLoading, setToastMessage } = useGlobalUI();
    const router = useRouter();
    const { reset, setNumeroFlujo, numero_afiliacion, setDatosBasicos } = useAppStore();

    const [showModalResume, setShowModalResume] = useState(false);

    const handleCreateAfiliation = async () => {
        try {
            setIsLoading(true);
            const resp: CreateAfiliationResponse = await Fetch(
                `/api/aplications`,
                undefined,
                undefined,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        numero_documento: '1',
                        scenario: process.env.NEXT_PUBLIC_API_POST_APPLICATIONS_ABANDON ?? ''
                    }),
                }
            );
            setNumeroFlujo(resp.data.numero_afiliacion);
            setDatosBasicos({
                numero_documento: '',
                tipo_de_documento: '',
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setToastMessage(error.message, 'error')
        } finally {
            setIsLoading(false);
            setShowModalResume(false);
        }
    }

    const handleAbandon = async (reason: string) => {
        try {
            setIsLoading(true);
            await Fetch(
                `/api/aplications/${numero_afiliacion}/abandon`,
                undefined,
                undefined,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        numero_afiliacion,
                        motivo: reason,
                        scenario: process.env.NEXT_PUBLIC_API_POST_APPLICATIONS_ABANDON ?? ''
                    }),
                }
            );
            reset();
            await sessionStorage.removeItem(APP_STORE);
            await handleCreateAfiliation();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setToastMessage(error.message, 'error');
            setShowModalResume(false);
        } finally {
            setIsLoading(false);
        }
    }

    const handleResume = () => {
        router.push('/datos-personales');
        setShowModalResume(false);
    } 



    return {
        handleAbandon,
        handleCreateAfiliation,
        showModalResume,
        handleResume,
    }
}