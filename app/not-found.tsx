import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold text-primary">Ups</h1>
      <p className="text-gray-500">No se encotró la página que buscas</p>
      <Link href="/home" className="text-primary underline text-sm">
        Volver al inicio
      </Link>
    </div>
  )
}