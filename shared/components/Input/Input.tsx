import { InputProps } from './Input.type'

export const Input = ({label, hasError, errorMessage, id, ...props}: InputProps) => {
  return (
    <div className={`flex flex-col w-full`}>
        <label htmlFor={id} className='text-sm text-primary mb-1'>{label}</label>
        <input id={id} aria-invalid={hasError} {...props} className={`p-2 bg-white rounded-lg border-1 border-gray-100 ${props.className}`} />
        {
            hasError ?
            (
                <span id={`${id}-error`} role="alert" className='text-xs text-red-500 mt-0.5 ml-1' >
                    {errorMessage}
                </span>
            ): null
        }
    </div>
  )
}
