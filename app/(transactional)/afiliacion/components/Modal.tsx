'use client';

import { Button } from "@/shared/components/Button/Button";
import { Card } from "@/shared/components/Card/Card";
import { useState } from "react";

interface Modal {
    isOpen: boolean;
    onResume: () => void;
    onAbandon: (reason: string) => Promise<void>;
}

export const Modal = ({ isOpen, onResume, onAbandon }: Modal) => {
    const [isAbandon, setIsAbandon] = useState(false);
    const [reason, setReason] = useState('');
    if (!isOpen) return null
    return (
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black" style={{ backgroundColor: '#00000080' }}
        >
            <div
                className=" w-1/2 max-w-md mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <Card>
                    <div>
                        <p className="font-semibold text-primary text-center" style={{ fontSize: 25 }}>Parece que tienes una afiliación en proceso</p>
                        <span className="text-sm text-gray-500 text-center">Por favor selecciona la opción que más te convenza</span>
                    </div>

                    {
                        isAbandon ?
                            (
                                <div className="mt-5">
                                    <label htmlFor="reason" test-id='reason'>Razón*</label>
                                    <textarea
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        className="w-full h-20 p-3 rounded-lg border border-gray-200 outline-none resize-none focus:border-primary text-sm text-gray-800"
                                        placeholder="Escribe aquí..."
                                        id="reason"
                                    />
                                </div>
                            ) : null
                    }

                    <div className="flex flex-row gap-3 mt-5">
                        <Button
                            buttonType="outline"
                            className="w-full"
                            onClick={() => {
                                if (!isAbandon) return setIsAbandon(true);
                                onAbandon(reason);
                            }}
                            disabled={isAbandon && reason.trim() === ''}
                        >
                            <p>Abandonar afiliación</p>
                        </Button>
                        {
                            !isAbandon ?
                                (
                                    <Button
                                        buttonType="primary"
                                        onClick={onResume}

                                        className="w-full"
                                    >
                                        <p>Retomar afiliación</p>
                                    </Button>
                                ) : null
                        }
                    </div>
                </Card>
            </div>
        </div>
    )
};