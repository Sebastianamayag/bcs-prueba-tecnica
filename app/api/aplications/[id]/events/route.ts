import { NextResponse } from 'next/server'
import { EVENTS } from './data/event'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params
    const { searchParams } = new URL(request.url)
    const scenario = searchParams.get('scenario')

    if (scenario === 'success' && id) {
        return NextResponse.json({
            status: 200,
            message: 'Solicitud encontrada',
            data: {
                events: EVENTS,
            }
        }, { status: 200 })
    }

    if (scenario === 'rejected' || !id) {
        return NextResponse.json({
            status: 404,
            error: 'Not Found',
            message: 'No se encontró la solicitud',
        }, { status: 404 })
    }

    return NextResponse.json({
      status: 500,
      error: 'Internal Server Error',
      message: 'Ocurrió un error inesperado, intenta de nuevo más tarde',
    }, { status: 500 })
}