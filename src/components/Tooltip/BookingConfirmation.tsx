import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import Tooltip from '.'
import ScheduleDeletionModal from '../Modal/ScheduleDeletionModal'
import { DateString } from '../../type/shared'
import { useState } from 'react'

interface BookingConfirmationProps {
  date: DateString
}

const BookingConfirmation = ({ date }: BookingConfirmationProps) => {
  const [deletionAlertIsVisible, setDeletionAlertIsVisible] = useState(false)

  const bookedLesson = useSelector((state: RootState) =>
    state.lessonBooking.bookingList.find(
      booking => booking.date[0] === date || booking.date[1] === date
    )
  )
  const isLessonStart = bookedLesson?.date[0] === date

  const selectedBookingTicket = useSelector((state: RootState) =>
    state.lessonTicket.tickets.find(
      ticket => ticket.id === bookedLesson?.ticketId
    )
  )

  if (!isLessonStart) return null
  return (
    <>
      <Tooltip
        className={`bg-purple-500 text-white ${selectedBookingTicket?.durationMinutes === 20 ? 'h-[18px]' : 'h-[46px]'}`}
        onClick={() => setDeletionAlertIsVisible(true)}
      >
        선택 완료
      </Tooltip>
      {deletionAlertIsVisible && bookedLesson && (
        <ScheduleDeletionModal
          schedule={bookedLesson}
          onClose={() => setDeletionAlertIsVisible(false)}
        />
      )}
    </>
  )
}

export default BookingConfirmation
