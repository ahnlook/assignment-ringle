import { useSelector } from 'react-redux'
import { addDays } from 'date-fns'

import { RootState } from '../../store'
import DayColumn from './DayColumn'
import TimeColumn from './TimeColumn'

const WeeklyScheduler = () => {
  const week = useSelector(
    (state: RootState) => state.lessonScheduler.currentWeek
  )
  const startDate = week.from ? new Date(week.from) : new Date()
  const days = Array.from({ length: 7 }, (_, i) => addDays(startDate, i))

  return (
    <div className='w-full flex overflow-scroll'>
      <TimeColumn />
      {days.map((date, index) => (
        <DayColumn key={index} date={date} />
      ))}
    </div>
  )
}

export default WeeklyScheduler
