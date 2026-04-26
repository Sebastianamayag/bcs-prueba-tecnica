import { HEADERS } from '../constants/headers'
import { consult } from '../type/consult'
import { Eye } from 'lucide-react'
import { bgStatus } from '../constants/data'
import Link from 'next/link'

export const Table = ({ data }: { data: consult[] }) => {
    if (data.length === 0) return (<h2 className='font-semibold w-3/4'>No se encontraron resultados</h2>)
    return (
        <div data-testid='data-search' className="bg-white p-5 shadow-lg rounded-lg flex flex-col gap-[10px] lg:m-xx-[10rem] ">
            <h2 className='font-semibold w-3/4'>Resultados</h2>
            <div>
                <div className="hidden lg:flex bg-gray-100 px-5 flex-row flex-1 py-3 border-1 border-gray-100" dta-testid='headers'>
                    {
                        HEADERS.map((header) => (
                            <p key={header.id} className={`text-primary font-medium flex-${header.flex} text-center `} >
                                {header.name}
                            </p>
                        ))
                    }
                </div>
                <div className=" bg-white px-5 py-3 border-1 border-gray-100 space-y-2">
                    {
                        data.map((datos) => (
                            <div key={datos.numero_afiliacion} className="flex flex-row items-center border-b gap-1 border-gray-200 md:py-2" >
                                <div className="flex flex-col flex-2 md:flex-4 md:flex-row">
                                    <p className={`font-regular text-sm md:text-center flex-1 md:text-[16px]`} >
                                        {datos.numero_afiliacion}
                                    </p>
                                    <p className={`font-regular text-sm md:text-center flex-2 md:text-[16px]`} >
                                        {datos.createdAt}
                                    </p>
                                    <p className={`font-regular text-sm md:text-center flex-2 md:text-[16px]`} >
                                        {datos.nombre}
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <p className={`font-regular 2xl:w-1/2 py-2 text-white text-sm md:text-[16px] text-center ${bgStatus[datos.estado]}`} >
                                        {datos.estado}
                                    </p>
                                </div>
                                <Link href={`/eventos/${datos.numero_afiliacion}`}>
                                    <div className="flex space-x-2 items-center md: justify-start flex-1">
                                        <Eye size={10} color="#00253d" />
                                        <p className="text-primary text-sm">Ver Detalle</p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
