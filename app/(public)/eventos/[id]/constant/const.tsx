import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export const icon: Record<string, React.ReactNode> = {
  'creado':  <CheckCircle size={18} className="text-green-500" />,
  'actualizado':  <CheckCircle size={18} className="text-green-500" />,
  'simulado':   <CheckCircle size={18} className="text-green-500" />,
  'rechazado': <AlertCircle size={18} className="text-red-500" />,
  'procesando':   <Clock size={18} className="text-amber-500" />,
};
