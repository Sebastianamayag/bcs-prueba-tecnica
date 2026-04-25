"use client";

import { createContext, useContext, useState } from "react";
import { globalUIContextType, providerProps, toastType } from "./type.context";
import { toast, ToastContainer } from "react-toastify";
import { HashLoader } from "react-spinners";

const GlobalUi = createContext<globalUIContextType | null>(null);

export function GlobalUIProvider({ children }: providerProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const setToastMessage = (toastMessage: string, type: toastType): void => {
        toast[type](toastMessage);
    }

    return (
        <GlobalUi.Provider value={{ setIsLoading, setToastMessage }}>
            {children}
            <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <HashLoader size={20} loading={isLoading} />

        </GlobalUi.Provider>
    )
};

export const useGlobalUI = () => useContext(GlobalUi);
