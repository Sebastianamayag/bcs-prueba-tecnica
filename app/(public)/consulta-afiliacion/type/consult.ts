
export type consult = {
  numero_afiliacion: string;
  nombre: string;
  numero_documento: string;
  estado: 'En curso' | 'En revision' | 'Aprovada' | 'Rechazada';
  createdAt: string;
  updatedAt: string;
}
export type consultResponse = {
    data: consult[];
    status: number;
    message: string;
}