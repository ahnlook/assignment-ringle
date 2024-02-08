import { useSelector } from 'react-redux'
import { addDays } from 'date-fns'

import { RootState } from '../../store'
import DayColumn from './DayColumn'

const WeeklySchedule = () => {
  const week = useSelector(
    (state: RootState) => state.lessonBookingDate.currentWeek
  )
  const startDate = new Date(week.from ?? new Date())
  const days = Array.from({ length: 7 }, (_, i) => addDays(startDate, i))

  return (
    <div className='flex w-full overflow-auto'>
      {days.map((date, index) => (
        <DayColumn key={index} date={date} />
      ))}
    </div>
  )
}

export default WeeklySchedule
