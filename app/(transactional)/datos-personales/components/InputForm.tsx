import { Input } from "@/shared/components/Input/Input";
import { Control, Controller } from "react-hook-form";

type InputFormProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
    label: string;
    id: string;
    name: "numero_documento" | "tipo_de_documento" | "primer_nombre" | "segundo_nombre" | "primer_apellido" | "segundo_apellido" | "cargo" | "ingresos" | "egresos" | "patrimonio";
} & React.InputHTMLAttributes<HTMLInputElement>;

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
