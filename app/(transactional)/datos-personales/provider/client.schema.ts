import { ERROR_MESSAGES } from "@/shared/constants/errorMessages";
import { MinCharacthers } from "@/utils/functions";
import { z } from "zod";

export const basicSchema = z.object({
  numero_documento: z.string().min(5, MinCharacthers(5)),
  tipo_de_documento: z.string().min(1, ERROR_MESSAGES.required),
  primer_nombre: z.string().min(1, ERROR_MESSAGES.required),
  segundo_nombre: z.string().optional(),
  primer_apellido: z.string().min(1, ERROR_MESSAGES.required),
  segundo_apellido: z.string().optional(),
});

export const financialSchema = z.object({
  cargo: z.string().min(1, ERROR_MESSAGES.required),
  ingresos: z.string().min(1, ERROR_MESSAGES.required),
  egresos: z.string().optional(),
  patrimonio: z.string().optional()
});

export const termsSchema = z.object({
  terminos: z.string().min(1, ERROR_MESSAGES.required),
});

export const formSchema = z.object({
  ...basicSchema.shape,
  ...financialSchema.shape,
  ...termsSchema.shape
});

export type FormValues = z.infer<typeof formSchema>;