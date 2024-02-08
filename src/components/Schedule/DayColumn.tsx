import { format, isToday as checkIsToday, isAfter, startOfDay } from 'date-fns'
import { ko } from 'date-fns/locale'

import HalfHourBlock from './HalfHourBlock'

const DayColumn = ({ date }: { date: Date }) => {
  const dayOfWeek = format(date, 'eee', { locale: ko })
  const dayOfMonth = format(date, 'd')
  const isToday = checkIsToday(date)
  const now = new Date()

  const timeSlots = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2)
    const minute = (i % 2) * 30

    const timeSlotDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hour,
      minute
    )

    let isFutureTimeSlot = false
    if (isToday) {
      isFutureTimeSlot = isAfter(timeSlotDate, now)
    } else {
      isFutureTimeSlot = isAfter(timeSlotDate, startOfDay(now))
    }

    return { hour, minute, isFutureTimeSlot }
  })

  return (
    <div className='flex-1 flex flex-col'>
      <div
        className={`flex flex-col items-center p-2 ${isToday ? 'bg-primary text-white' : ''}`}
      >
        <div className='text-sm'>{dayOfWeek}</div>
        <div
          className={`h-[38px] w-[38px] flex items-center justify-center text-lg font-bold rounded-full ${isToday ? 'bg-primary text-white' : ''}`}
        >
          {dayOfMonth}
        </div>
      </div>
      {timeSlots.map(({ hour, minute, isFutureTimeSlot }, index) => (
        <HalfHourBlock
          key={index}
          hour={hour}
          minute={minute}
          isFuture={isFutureTimeSlot}
        />
      ))}
    </div>
  )
}

export default DayColumn
