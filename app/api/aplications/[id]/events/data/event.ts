import { event } from "../type/event.type";


export const EVENTS: event[] = [
  {
    type: 'CREATED',
    date: '2026-04-24T10:00:00',
    description: 'Solicitud creada'
  },
  {
    type: 'UPDATED',
    date: '2026-04-24T10:05:00',
    description: 'Datos actualizados'
  },
  {
    type: 'SIMULATED',
    date: '2026-04-24T10:06:00',
    description: 'Simulación de oferta realizada'
  },
  {
    type: 'REJECTED',
    date: '2026-04-24T10:07:00',
    description: 'Solicitud rechazada'
  }
]