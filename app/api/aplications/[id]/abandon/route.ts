import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const { scenario, numero_afiliacion, motivo } = await request.json()

    if (scenario === 'success' && numero_afiliacion) {
        return NextResponse.json({
            status: 200,
            message: 'Afiliación abandonada correctamente',
        }, { status: 200 })
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
