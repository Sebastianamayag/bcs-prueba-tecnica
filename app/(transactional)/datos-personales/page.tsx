'use client';
import { BasicDataForm } from "./components/BasicDataForm";
import { FinancialDataForm } from "./components/FinancialDataForm";
import { FormContextProvider } from "./provider/ClientProvider";

export default function Page() {
    return (
        <FormContextProvider>
            <form>
                <BasicDataForm />
                <FinancialDataForm />
            </form>
        </FormContextProvider>
    );
};

