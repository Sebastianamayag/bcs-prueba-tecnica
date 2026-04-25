import { FileText, CheckCircle, CheckCircle2 } from 'lucide-react';
import { step } from '../data/works';

export const STEPS: step[] = [
  {
    Icon: FileText,
    title: 'Ingresa tus datos',
    description: 'Cuentanos sobre ti y tus necesidades',
  },
  {
    Icon: CheckCircle,
    title: 'Validamos tu información',
    description: 'Revisamos tu solicitud rápidamente',
  },
  {
    Icon: CheckCircle2,
    title: '¡Listo!',
    description: 'Tu cuenta corriente está activa',
  },
];