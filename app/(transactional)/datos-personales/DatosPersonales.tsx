'use client';
import { BasicDataForm } from './components/BasicDataForm';
import { FinancialDataForm } from './components/FinancialDataForm';
import { TermsDataForm } from './components/TermsDataForm';
import { useSaveDataClient } from './hooks/useSaveDataClient';
import { Button } from '@/shared/components/Button/Button';

export const DatosPersonales = () => {
    const { handleSubmit } = useSaveDataClient();
    return (
        <>
            <form onSubmit={handleSubmit}>
                <BasicDataForm />
                <FinancialDataForm />
                <TermsDataForm />
                <div className='flex justify-center w-full mt-10'>
                    <Button type="submit" buttonType={'primary'}>
                        <p className='w-48'>Guardar</p>
                    </Button>
                </div>
            </form>
        </>
    )
}
