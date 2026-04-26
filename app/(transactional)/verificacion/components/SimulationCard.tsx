import { Card } from "@/shared/components/Card/Card"
import { DataResponse } from "../type/simulate.response"
import { CheckCircle } from "lucide-react"

export const SimulateCard = ({ data }: { data: DataResponse | null }) => {
    if (!data) return (
        <div className="px-5 md:px-10 lg:px-20 mt-5 mb-5">
            <h2 className='font-semibold' data-testid='no_ofert' >Ups no pudimos simular la oferta</h2>
        </div>
    );
    return (
        <div className="px-5 md:px-10 lg:px-20 mt-5 mb-5">
            <Card >
                <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                    <div>
                        <p className="text-sm text-gray-500">Oferta generada</p>
                        <p className="text-base font-medium text-gray-900 mt-1">Cuenta Ahorros Digital</p>
                    </div>
                    <span className="text-xs bg-green-500 text-white px-3 py-2 rounded-lg w-fit">
                        Simulación exitosa
                    </span>
                </div>

                <div className="flex flex-row gap-2 ">
                    <div className="rounded-lg p-4 flex-1 bg-gray-100">
                        <p className="text-xs text-primary mb-1">Tasa mensual</p>
                        <p className="text-2xl font-medium">{data?.tasaInteresMensual}%</p>
                    </div>
                    <div className="rounded-lg p-4 flex-1 bg-gray-100">
                        <p className="text-xs text-primary mb-1">Tasa anual</p>
                        <p className="text-2xl font-medium">{data?.tasaInteresAnual}%</p>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-2">
                    <p className="text-sm text-gray-500">Beneficios incluidos</p>
                    {data?.beneficios.map((beneficio) => (
                        <div key={beneficio} className="flex items-center gap-2">
                            <CheckCircle size={18} className="text-green-500" />
                            <span className="text-sm text-gray-800">{beneficio}</span>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-400 break-all">ID oferta: {data?.ofertaId}</p>
                </div>
            </Card>
        </div>
    )
}