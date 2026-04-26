'use client';
import { DatosPersonales } from "./DatosPersonales";
import { FormContextProvider } from "./provider/ClientProvider";

export default function Page() {
    return (
        <FormContextProvider>
            <DatosPersonales />
        </FormContextProvider>
    );
};

