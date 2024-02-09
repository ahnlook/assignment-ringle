import MonthlyCalendar from '../Calendar/MonthlyCalendar'
import WeeklyScheduler from './WeeklyScheduler'

const Schedule = () => {
  return (
    <div className='flex flex-1'>
      <MonthlyCalendar />
      <WeeklyScheduler />
    </div>
  )
}

export default Schedule
