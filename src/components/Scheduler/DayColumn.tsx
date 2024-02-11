import { format, isSameDay } from 'date-fns'
import { ko } from 'date-fns/locale'

import HalfHourBlock from './HalfHourBlock'
import { calculateTimeSlots } from '../../utils/scheduler'

interface DayColumnProps {
  date: Date
}

const DayColumn = ({ date }: DayColumnProps) => {
  const now = new Date()
  const dayOfWeek = format(date, 'eee', { locale: ko })
  const dayOfMonth = format(date, 'd')
  const isToday = isSameDay(date, now)
  const isHoliday = ['토', '일'].includes(dayOfWeek)
  const timeSlots = calculateTimeSlots(date, now)

  return (
    <div className='flex-1 flex flex-col'>
      <div
        className={`flex flex-col items-center p-2 ${isHoliday && 'text-red-500'}`}
      >
        <div className='text-sm'>{dayOfWeek}</div>
        <div
          className={`h-[38px] w-[38px] flex items-center justify-center text-lg font-bold rounded-full ${isToday ? 'bg-primary text-white' : ''}`}
        >
          {dayOfMonth}
        </div>
      </div>
      {timeSlots.map(({ timeSlotDate, isFutureTimeSlot }) => (
        <HalfHourBlock
          key={timeSlotDate.toString()}
          date={timeSlotDate}
          isFuture={isFutureTimeSlot}
        />
      ))}
    </div>
  )
}

export default DayColumn
