'use client';
import { BasicDataForm } from "./components/BasicDataForm";
import { FormContextProvider } from "./provider/ClientProvider";

export default function Page() {
    return (
        <FormContextProvider>
            <form>
                <BasicDataForm />
            </form>
        </FormContextProvider>
    );
};

