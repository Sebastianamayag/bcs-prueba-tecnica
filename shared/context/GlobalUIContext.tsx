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
            <div>
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


                {
                    isLoading ?
                        (
                            <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
                                <HashLoader size={40} loading={isLoading} />
                            </div>
                        ) : null
                }

            </div>

        </GlobalUi.Provider>
    )
};

export const useGlobalUI = () => {
  const context = useContext(GlobalUi)

  if (!context) {
    throw new Error("useGlobalUI must be used within GlobalUIProvider")
  }

  return context
}
