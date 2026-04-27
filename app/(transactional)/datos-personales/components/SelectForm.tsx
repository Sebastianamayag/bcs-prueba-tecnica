import { Select } from "@/shared/components/Select/Select";
import { Control, Controller } from "react-hook-form";

type SelectFormProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
    label: string;
    name: string;
    options: { label: string, value: string }[];
} & React.InputHTMLAttributes<HTMLInputElement>;


export const SelectForm = ({ control, name, options, label }: SelectFormProps) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <div className="flex flex-col flex-1">
                    <label htmlFor="tipo_de_documento" className='text-sm text-primary mb-1' data-testid='tipo'>{label}</label>
                    <Select
                        options={options}
                        placeHolder="Tipo de documento"
                        {...field}
                        className="border-1 border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white h-11 focus:outline-none focus:border-primary"
                    />
                    {
                        !!fieldState.error ?
                            (
                                <span id={`tipo_de_documento-error`} role="alert" className='text-xs text-red-500 mt-0.5 ml-1' >
                                    {fieldState.error?.message ?? ''}
                                </span>
                            ) : null
                    }
                </div>
            )}
        />
    )
}
