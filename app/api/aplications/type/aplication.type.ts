export type aplication = {
  numero_afiliacion: string
  nombre: string
  numero_documento: string
  estado: 'En curso' | 'En revision' | 'Aprovada' | 'Rechazada'
  createdAt: string
  updatedAt: string
}