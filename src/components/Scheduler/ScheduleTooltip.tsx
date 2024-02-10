import { ReactNode } from 'react'

interface ScheduleTooltipProps {
  className: string
  children: ReactNode
  onClick?: () => void
}

const ScheduleTooltip = ({
  className,
  children,
  onClick
}: ScheduleTooltipProps) => {
  return (
    <button
      className={`${className} absolute inset-0 max-w-[94%] bg-purple-50 m-1 shadow-lg border border-primary rounded-lg z-10`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ScheduleTooltip
