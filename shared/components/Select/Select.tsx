import { SelectProps } from './select.type';

export const Select = ({ options, placeHolder, ...props}: SelectProps) => {
    return (
        <select
            className={` ${props.className} border w-full  border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white h-11 focus:outline-none focus:border-primary md:w-1/2`}
            {...props}
        >

            <option value="" disabled>{placeHolder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}
