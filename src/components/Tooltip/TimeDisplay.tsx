import { useDispatch, useSelector } from 'react-redux'

import { lessonBookingActions } from '../../store/lessonBookingSlice'
import { RootState } from '../../store'
import Tooltip from '.'
import { DateString } from '../../type/shared'
import { formatTime, isFortyMinuteLessonOverlapping } from '../../utils/date'

interface TimeDisplayProps {
  date: DateString
}

const TimeDisplay = ({ date }: TimeDisplayProps) => {
  const dispatch = useDispatch()
  const hoursAndMinutes = formatTime(date)

  const { bookingList, selectedTicketId } = useSelector(
    (state: RootState) => state.lessonBooking
  )
  const bookedLesson = bookingList.find(
    booking => booking.date[0] === date || booking.date[1] === date
  )

  const currentLessonDuration = useSelector((state: RootState) => {
    const selectedTicket = state.lessonTicket.tickets.find(
      ticket => ticket.id === selectedTicketId
    )
    return selectedTicket?.durationMinutes
  })
  const isLessonEnd = bookedLesson?.date[1] === date
  const isFortyMinuteLesson = currentLessonDuration === 40
  const isOverlapping = isFortyMinuteLessonOverlapping(date, bookingList)

  const handleLessonTimeSelection = (date: DateString) => {
    dispatch(lessonBookingActions.setBookingDate(date.toString()))
  }

  return (
    <Tooltip
      className={`opacity-0 ${(isLessonEnd || isOverlapping) && 'pointer-events-none'} ${isLessonEnd || isOverlapping || 'hover:opacity-100'} ${isFortyMinuteLesson ? 'h-[46px]' : 'h-[18px]'}`}
      onClick={() => handleLessonTimeSelection(date)}
    >
      {hoursAndMinutes}
    </Tooltip>
  )
}

export default TimeDisplay
