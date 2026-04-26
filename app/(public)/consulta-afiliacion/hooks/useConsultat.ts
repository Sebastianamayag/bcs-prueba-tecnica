import { useState } from "react"
import { MinCharacthers } from "@/utils/functions";
import { Fetch } from "@/shared/fetch/Fetch";
import { consult, consultResponse } from "../type/consult";
import { useGlobalUI } from "@/shared/hooks/useGlobalUI";

export const useConsult = () => {

    const [documentNumber, setDocumentNumber] = useState<string>('');
    const { setIsLoading, setToastMessage } = useGlobalUI();
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<consult[] | null>([]);
    const [filterData, setFilterData] = useState<consult[] | null>(null);
    const [status, setStatus] = useState<string>('');
    const handleConsult = async() => {
        try {
            const params: Record<string, string> = { numero_documento: documentNumber };
            setIsLoading(true);
            const { data }: consultResponse = await Fetch(
                '/api/aplications',
                process.env.NEXT_PUBLIC_API_GET_APPLICATIONS ?? '',
                params
            );
            setData(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setToastMessage(error.message, 'error')
        } finally {
            setIsLoading(false);
        }
    }

    const handleValidate = () => {
        if(documentNumber.length < 5) return setError(MinCharacthers(5))
        setError(null);    
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setDocumentNumber(value);
        handleValidate();
    }

    const handleFilter = (value: string) => {
        if(!value || !data) return;
        setFilterData([...data].filter((val) => val.estado === value));
    }

    const clearFilter = () => {
        setStatus('');
        setFilterData(null);
    }

    return {
        documentNumber,
        onChange,
        handleConsult,
        handleValidate,
        error,
        data,
        clearFilter,
        handleFilter,
        status,
        setData,
        setStatus,
        filterData,
    }
}