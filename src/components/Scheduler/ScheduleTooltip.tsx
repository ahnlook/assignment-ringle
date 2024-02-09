const ScheduleTooltip = ({
  className,
  children,
  onClick
}: {
  className: string
  children: React.ReactNode
  onClick?: () => void
}) => {
  return (
    <button
      className={`${className} absolute inset-0 w-[94%] bg-purple-50 m-1 shadow-lg border border-primary rounded-lg z-10`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ScheduleTooltip
