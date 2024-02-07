import { useSelector } from 'react-redux'

import { RootState } from '../store'
import LessonTicketSelector from '../components/LessonTicketSelector'

const LessonBooking = () => {
  const isLessonTicketModalOpen = useSelector(
    (state: RootState) => state.lessonBookingUi.lessonTicketModalIsVisible
  )

  return <>{isLessonTicketModalOpen && <LessonTicketSelector />}</>
}

export default LessonBooking
