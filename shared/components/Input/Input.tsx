import { InputProps } from './Input.type'

export const Input = ({label, hasError, errorMessage, id, ...props}: InputProps) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} aria-invalid={hasError} {...props} />
        {
            hasError ?
            (
                <span id={`${id}-error`} role="alert">
                    {errorMessage}
                </span>
            ): null
        }
    </div>
  )
}
