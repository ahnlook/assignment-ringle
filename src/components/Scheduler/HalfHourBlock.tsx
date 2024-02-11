import { getMinutes } from 'date-fns'

import TimeDisplay from '../Tooltip/TimeDisplay'
import TutorSelection from '../Tooltip/TutorSelection'
import BookingConfirmation from '../Tooltip/BookingConfirmation'

interface ScheduleBlockProps {
  date: Date
  isFuture: boolean
}

const HalfHourBlock = ({ date, isFuture }: ScheduleBlockProps) => {
  const dateString = date.toString()
  const minutes = getMinutes(date)
  const isOnTheHour = minutes === 0

  return (
    <div
      style={{
        borderTopStyle: `${isOnTheHour ? 'solid' : 'dashed'}`
      }}
      className={`relative h-7 min-h-7 flex justify-start border-t border-r border-gray-200 text-xs ${isFuture || 'bg-gray-200 bg-opacity-40 pointer-events-none'}`}
    >
      <TimeDisplay date={dateString} />
      <TutorSelection date={dateString} />
      <BookingConfirmation date={dateString} />
    </div>
  )
}

export default HalfHourBlock
