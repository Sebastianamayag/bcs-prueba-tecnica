import { Input } from "@/shared/components/Input/Input";
import { Control, Controller } from "react-hook-form";

interface CheckboxFormProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
    label: string;
    id: string;
    name: "terminos";
}
export const CheckBoxForm = ({ control, name, ...props }: CheckboxFormProps) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Input
                    type="checkbox"
                    {...field}
                    {...props}
                    hasError={!!fieldState.error}
                    errorMessage={fieldState.error?.message ?? ''}
                    className="cursor-pointer"
                    style={{width: 20}}
                />
            )}
        />
    )
}
