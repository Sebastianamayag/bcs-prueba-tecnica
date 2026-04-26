import { Input } from "@/shared/components/Input/Input";
import { Control, Controller } from "react-hook-form";

interface InputFormProps {
    control: Control<any>
    label: string;
    id: string;
    name: "numero_documento" | "tipo_de_documento" | "primer_nombre" | "segundo_nombre" | "primer_apellido" | "segundo_apellido" | "cargo" | "ingresos" | "egresos" | "patrimonio" | "terminos";
}
export const InputForm = ({ control, name, ...props }: InputFormProps) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Input
                    {...field}
                    {...props}
                    hasError={!!fieldState.error}
                    errorMessage={fieldState.error?.message ?? ''}
                />
            )}
        />
    )
}
