const TimeColumn = () => {
  const timeSlots = Array.from({ length: 24 }, (_, i) => ({ hour: i }))

  return (
    <div className='flex flex-col pt-[67px]'>
      {timeSlots.map(({ hour }) => (
        <div
          key={hour}
          className={`min-h-14 pr-2.5 text-[10px] text-right text-gray-500`}
        >
          {hour}시
        </div>
      ))}
    </div>
  )
}

export default TimeColumn
