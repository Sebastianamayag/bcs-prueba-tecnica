import { event } from "../type/event.type";


export const EVENTS: event[] = [
  {
    type: 'CREADO',
    date: '2026-04-24T10:00:00',
    description: 'Solicitud creada',
    id: "0005"
  },
  {
    type: 'ACTUALIZADO',
    date: '2026-04-24T10:05:00',
    description: 'Datos actualizados',
    id: "00080"
  },
  {
    type: 'SIMULADO',
    date: '2026-04-24T10:06:00',
    description: 'Simulación de oferta realizada',
    id: "000100"
  },
  {
    type: 'RECHAZADO',
    date: '2026-04-24T10:07:00',
    description: 'Solicitud rechazada',
    id: "000101"
  }
]