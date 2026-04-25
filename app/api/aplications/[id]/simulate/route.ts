import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const { scenario, numero_afiliacion } = await request.json()

    if (scenario === 'success' && numero_afiliacion) {
        return NextResponse.json({
            status: 201,
            message: 'Simulación generada exitosamente',
            data: {
                ofertaId: crypto.randomUUID(),
                tasaInteresMensual: 0.5,
                tasaInteresAnual: 6.0,
                beneficios: [
                    'Sin cuota de manejo',
                    'Retiros gratuitos',
                    'Transferencias gratuitas',
                ],
            }
        }, { status: 201 })
    }

    if (scenario === 'rejected' || !numero_afiliacion) {
        return NextResponse.json({
            status: 400,
            error: 'Bad Request',
            message: 'Los datos enviados no son válidos',
        }, { status: 400 })
    }

    return NextResponse.json({
      status: 500,
      error: 'Internal Server Error',
      message: 'Ocurrió un error inesperado, intenta de nuevo más tarde',
    }, { status: 500 })
}
