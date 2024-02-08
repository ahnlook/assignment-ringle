const ScheduleTooltip = ({
  className,
  children
}: {
  className: string
  children: React.ReactNode
}) => {
  return (
    <button
      className={`${className} w-full bg-purple-50 m-1 shadow-lg border border-primary rounded-lg opacity-0 hover:opacity-100 z-10`}
    >
      {children}
    </button>
  )
}

export default ScheduleTooltip
