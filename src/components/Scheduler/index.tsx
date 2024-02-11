import MonthlyCalendar from '../Calendar/MonthlyCalendar'
import TipBox from '../TipBox'
import WeeklyScheduler from './WeeklyScheduler'
import NoTicketsAvailableModal from '../Modal/NoTicketsAvailableModal'

const Schedule = () => {
  return (
    <div className='flex flex-1'>
      <MonthlyCalendar />
      <div className='flex flex-col flex-1'>
        <TipBox />
        <WeeklyScheduler />
      </div>
      <NoTicketsAvailableModal />
    </div>
  )
}

export default Schedule
