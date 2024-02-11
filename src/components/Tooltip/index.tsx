import { ReactNode } from 'react'
import { DateString } from '../../type/shared'

interface TooltipProps {
  className: string
  children: ReactNode
  onClick?: () => void
}

export interface Tooltip {
  date: DateString
}

const Tooltip = ({ className, children, onClick }: TooltipProps) => {
  return (
    <button
      className={`${className} absolute inset-0 max-w-[94%] bg-purple-50 m-1 shadow-lg border border-primary rounded-lg z-10`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Tooltip
