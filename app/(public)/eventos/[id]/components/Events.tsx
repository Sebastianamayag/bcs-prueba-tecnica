import { event } from "../type"
import { Capitalize } from "@/utils/functions"
import { icon } from "../constant/const"

export const Events = ({ eventos }: { eventos: event[] }) => {
    return (
        <section data-testid='events' className=" bg-white rounded-xl p-5 md:p-10">
            <h2 className="font-semibold w-3/4" >Eventos de la solicitud</h2>
            {
                eventos.length < 1 ?
                    (
                        <p className="text-gray-500 mt-4">
                            Aún no hay eventos registrados para esta solicitud.
                        </p>
                    ) :
                    (
                        <>
                            <table className="w-full text-sm hidden md:block">
                                <thead>
                                    <tr className="border-b border-gray-100 text-gray-500 text-left">
                                        <th className="pb-3 font-normal">Evento</th>
                                        <th className="pb-3 font-normal">Fecha y hora</th>
                                        <th className="pb-3 font-normal">Descripción</th>
                                    </tr>
                                </thead>
                                <tbody className="w-full">
                                    {eventos.map((evento) => (
                                        <tr key={evento.id} className="border-b border-gray-100 ">
                                            <td className="py-4 gap-3 w-1/4" data-testid='event-table-type'>
                                                <div className="flex gap-2">
                                                    {icon[evento.type.toLowerCase()]}
                                                    Solicitud {Capitalize(evento.type)}
                                                </div>
                                            </td>
                                            <td className="py-4 gap-3 w-2/4" data-testid='event-table-date'>
                                                {evento.date}
                                            </td>
                                            <td className="py-4 gap-3 w-1/4" data-testid='event-table-description'>
                                                {evento.description}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="md:hidden">
                                {
                                    eventos.map((evento) => (
                                        <div key={evento.id} className="flex flex-1 items-center py-5" >
                                            <div className="flex-1">
                                                {icon[evento.type.toLowerCase()]}
                                            </div>
                                            <div className="flex-[10] flex gap-0 flex-col">
                                                <span className="text-primary font-semibold" data-testid='event-type'>Solicitud{Capitalize(evento.type)}</span>
                                                <p className="text-[14px] font-regular" data-testid='event-date'>{evento.date} </p>
                                                <p className="text-[14px] font-regular" data-testid='event-description'>{evento.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )
            }

        </section>
    )
}
