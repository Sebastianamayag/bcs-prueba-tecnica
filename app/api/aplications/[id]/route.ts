import { NextResponse } from 'next/server'
export async function GET(request: Request, { params }: { params: Promise<{ id: string; }>; }) {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const scenario = searchParams.get('scenario');

    if (scenario === 'success' && id) {
        return NextResponse.json({
            status: 200,
            message: 'Solicitud encontrada',
            data: {
                numeroAfiliacion: id,
            }
        }, { status: 200 });
    }

    if (scenario === 'rejected' || !id) {
        return NextResponse.json({
            status: 404,
            error: 'Not Found',
            message: 'No se encontró la solicitud',
        }, { status: 404 });
    }

    return NextResponse.json({
      status: 500,
      error: 'Internal Server Error',
      message: 'Ocurrió un error inesperado, intenta de nuevo más tarde',
    }, { status: 500 });
}

export async function PATCH(request: Request) {
    const { scenario, numero_afiliacion, data } = await request.json()

    if (scenario === 'success' && numero_afiliacion && data) {
        return NextResponse.json({
            status: 200,
            message: 'Solicitud actualizada exitosamente',
            data: {
                numero_afiliacion,
                updatedAt: new Date().toISOString(),
            }
        }, { status: 200 });
    }

    if (scenario === 'rejected' || !numero_afiliacion || !numero_afiliacion) {
        return NextResponse.json({
            status: 404,
            error: 'Not Found',
            message: 'No se encontró la solicitud',
        }, { status: 404 });
    }

    return NextResponse.json({
      status: 500,
      error: 'Internal Server Error',
      message: 'Ocurrió un error inesperado, intenta de nuevo más tarde',
    }, { status: 500 });
}
