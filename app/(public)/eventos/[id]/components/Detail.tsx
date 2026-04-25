import { detail } from "../type"

export const Detail = ({ numero_afiliacion, nombre, estado, createdAt }: detail) => {
  return (
    <section data-testid='detail' className="space-y-5 py-10" >
        <div>
            <h1 className='font-bold text-primary text-[2.2rem] md:text-[2.5rem]'>Detalle de la solicitud</h1>
            <h2 className='font-semibold w-3/4'>Numero de solicitud: {numero_afiliacion} </h2>
        </div>
        <div className="flex flex-col lg:flex-row rounded-xl border-1 border-gray-100 p-5 bg-white lg:justify-between space-y-2 lg:items-center lg:divide-x lg:divide-gray-200" >
            <div className="flex lg:flex-col items-center  md:px-10">
                <span className="text-gray-500 text-lg flex-1">Fecha de creación</span>
                <p className="text-md flex-1">{createdAt}</p>
            </div>
            <div className="flex lg:flex-col items-center md:px-10">
                <span className="text-gray-500 text-lg flex-1">Solicitante</span>
                <p className="text-md flex-1">{nombre}</p>
            </div>
            <div className="flex lg:flex-col items-center md:px-10">
                <span className="text-gray-500 text-lg flex-1">Estado</span>
                <p className="bg-amber-500 p-1 rounded-sm text-md text-white flex-1">{estado}</p>
            </div>
        </div>
    </section>
  )
}
