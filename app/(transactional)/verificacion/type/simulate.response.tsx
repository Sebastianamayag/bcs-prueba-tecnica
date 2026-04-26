
export interface DataResponse {
    ofertaId: string
    tasaInteresMensual: number
    tasaInteresAnual: number
    beneficios: string[]
}

export interface SimulateResponse {
    status: number
    message: string
    data: DataResponse
}