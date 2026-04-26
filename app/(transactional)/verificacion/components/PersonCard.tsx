import { Card } from "@/shared/components/Card/Card"
import { basicData, financialData } from "../../store/client.type"
import { formatCurrency } from "@/utils/functions"

type PersonalData = basicData & financialData

export const PersonCard = ({ data }: { data: PersonalData }) => {
    return (
        <div className="px-5 md:px-10 lg:px-20">
            <Card >
                <h2 className='text-sm text-gray-500 mb-5'>Datos personales</h2>

                <div className="space-y-2">
                    <p className="font-semibold text-primary mb-5">Datos Basicos</p>
                    <div className="flex flex-row gap-3">
                        <div className="flex-1">
                            <p className="text-xs text-gray-500">Tipo de documento</p>
                            <p className="text-sm font-medium text-primary">{data.tipo_de_documento}</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-gray-500">Número de documento</p>
                            <p className="text-sm font-medium text-primary">{data.numero_documento}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="flex-1">
                            <p className="text-xs text-gray-500">Primer Nombre</p>
                            <p className="text-sm font-medium text-primary">{data.primer_nombre}</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-gray-500">Primer Apellido</p>
                            <p className="text-sm font-medium text-primary">{data.primer_apellido}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-2 border-t border-gray-100 pt-4">
                    <p className="font-semibold text-primary mt-5">Datos financieros</p>
                    <div className="flex flex-row gap-3">
                        <div className="bg-gray-50 rounded-lg p-3 flex-1">
                            <p className="text-xs text-gray-500 mb-1">Ingresos</p>
                            <p className="text-sm font-medium text-primary">
                                {formatCurrency(data.ingresos)}
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 flex-1">
                            <p className="text-xs text-gray-500 mb-1">Egresos</p>
                            <p className="text-sm font-medium text-primary">
                                {formatCurrency(data.egresos)}
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 flex-1">
                            <p className="text-xs text-gray-500 mb-1">Patrimonio</p>
                            <p className="text-sm font-medium text-primary">
                                {formatCurrency(data.patrimonio)}
                            </p>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    )
}