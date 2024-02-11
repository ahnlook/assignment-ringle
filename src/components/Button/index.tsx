import { ComponentPropsWithoutRef, ReactNode } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  isDisabled?: boolean
  className?: string
  children?: ReactNode
}

const Button = ({
  isDisabled = false,
  className = '',
  children,
  ...rest
}: ButtonProps) => {
  const disabledStyles = isDisabled
    ? 'bg-gray-200 text-gray-300 pointer-events-none'
    : 'bg-purple-500 text-white'

  return (
    <button
      className={`w-[150px] min-h-[42px] p-2.5 text-[14px] rounded ${disabledStyles} ${className}`}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
