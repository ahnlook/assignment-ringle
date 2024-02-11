const TimeColumn = () => {
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = Math.floor(i)

    return { hour }
  })

  return (
    <div className='flex flex-col pt-[67px]'>
      {timeSlots.map(({ hour }) => (
        <div className={`min-h-14 pr-2.5 text-[10px] text-right text-gray-500`}>
          <span>{hour}시</span>
        </div>
      ))}
    </div>
  )
}

export default TimeColumn
