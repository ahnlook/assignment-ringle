import { useSelector } from 'react-redux'

import { RootState } from '../store'
import LessonTicketSelector from '../components/LessonTicketSelector'
import Header from '../components/Header'
import Schedule from '../components/Scheduler'
import TutorSelector from '../components/TutorSelector'

const LessonBooking = () => {
  const isLessonTicketModalOpen = useSelector(
    (state: RootState) => state.lessonBookingUi.lessonTicketModalIsVisible
  )

  return (
    <>
      {isLessonTicketModalOpen && <LessonTicketSelector />}
      <div className={`${isLessonTicketModalOpen && 'pointer-events-none'}`}>
        <Header />
        <div className='flex'>
          <Schedule />
          <TutorSelector />
        </div>
      </div>
    </>
  )
}

export default LessonBooking
