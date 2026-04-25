import { NextResponse } from 'next/server'
import { APLICATIONS } from './data/aplication'
import { aplication } from './type/aplication.type'

export async function POST(request: Request) {
    const { scenario, tipo_documento, numero_documento } = await request.json()

    if (scenario === 'success' && tipo_documento && numero_documento) {
        return NextResponse.json({
            status: 201,
            message: 'Afiliación creada exitosamente',
            data: {
            numero_afiliacion: crypto.randomUUID(),
            }
        }, { status: 201 })
    }

    if (scenario === 'rejected' || !tipo_documento || !numero_documento) {
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

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const scenario = searchParams.get('scenario');
    const documentNumber = searchParams.get('numero_documento');

    if (scenario === 'success') {
        return NextResponse.json({
            status: 200,
            message: 'Solicitudes encontrada',
            data: APLICATIONS.filter((aplication: aplication) => {
                const documentNumberFilter = documentNumber ? aplication.numero_documento === documentNumber: true;
                return  documentNumberFilter;
            }),
        }, { status: 200 });
    }

    if (scenario === 'rejected' ) {
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
