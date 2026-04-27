'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold text-primary">Ups</h1>
      <p className="text-gray-500">No se pudo cargar el contenido de la página</p>
      <button
        onClick={reset}
        className="text-primary underline text-sm"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}