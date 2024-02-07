import { useSelector } from 'react-redux'

import { RootState } from '../store'
import LessonTicketSelector from '../components/LessonTicketSelector'
import Header from '../components/Header'

const LessonBooking = () => {
  const isLessonTicketModalOpen = useSelector(
    (state: RootState) => state.lessonBookingUi.lessonTicketModalIsVisible
  )

  return (
    <>
      {isLessonTicketModalOpen && <LessonTicketSelector />}
      <Header />
    </>
  )
}

export default LessonBooking
