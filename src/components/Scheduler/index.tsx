import MonthlyCalendar from '../Calendar/MonthlyCalendar'
import TipBox from './TipBox'
import WeeklyScheduler from './WeeklyScheduler'

const Schedule = () => {
  return (
    <div className='flex flex-1'>
      <MonthlyCalendar />
      <div className='flex-1'>
        <TipBox />
        <WeeklyScheduler />
      </div>
    </div>
  )
}

export default Schedule
