import { ButtonProps } from './Button.type'

export const Button = ({ children, buttonType, ...props }: ButtonProps) => {
  const baseClassName = 'p-2 flex flex-row justify-center items-center rounded-lg'
  const buttonClass = buttonType === 'primary' ? 'bg-primary text-white' : 'border-primary border-1 text-primary bg-transparent'
  return (
    <button {...props} className={`${baseClassName} ${buttonClass} ${props.className} `} >
      {children}
    </button>
  )
}

