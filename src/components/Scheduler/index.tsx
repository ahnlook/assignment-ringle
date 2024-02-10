import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import MonthlyCalendar from '../Calendar/MonthlyCalendar'
import TipBox from '../TipBox'
import WeeklyScheduler from './WeeklyScheduler'
import NoTicketsAvailableModal from '../Modal/NoTicketsAvailableModal'

const Schedule = () => {
  const { tipBoxIsVisible } = useSelector(
    (state: RootState) => state.lessonBookingUi
  )

  return (
    <>
      <div className='flex flex-1'>
        <MonthlyCalendar />
        <div className='flex-1'>
          {tipBoxIsVisible && <TipBox />}
          <WeeklyScheduler />
        </div>
      </div>
      <NoTicketsAvailableModal />
    </>
  )
}

export default Schedule
