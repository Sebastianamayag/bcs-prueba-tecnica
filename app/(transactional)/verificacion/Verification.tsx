'use client'

import { Button } from "@/shared/components/Button/Button";
import { PersonCard } from "./components/PersonCard";
import { SimulateCard } from "./components/SimulationCard";
import { useVerification } from "./hooks/useVerification"

export const Verification = () => {
    const { data, datosBasicos, datosFinancieros, handleEndAfiliation } = useVerification();
    return (
        <div style={{ height: '90dvh' }}>
            <SimulateCard data={data} />
            <PersonCard data={{ ...datosBasicos, ...datosFinancieros }} />
            <div className='flex justify-center w-full mt-10'>
                <Button type="button" buttonType={'primary'} onClick={handleEndAfiliation}>
                    <p className='w-48'>Finalizar afiliación</p>
                </Button>
            </div>
        </div>
    )
}
