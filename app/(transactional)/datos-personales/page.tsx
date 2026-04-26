'use client';
import { BasicDataForm } from "./components/BasicDataForm";
import { FinancialDataForm } from "./components/FinancialDataForm";
import { TermsDataForm } from "./components/TermsDataForm";
import { FormContextProvider } from "./provider/ClientProvider";

export default function Page() {
    return (
        <FormContextProvider>
            <form>
                <BasicDataForm />
                <FinancialDataForm />
                 <TermsDataForm />
            </form>
        </FormContextProvider>
    );
};

