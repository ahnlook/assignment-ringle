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
  const isTimeLimit = isFortyMinuteLesson && hoursAndMinutes === '23:30'
  const isOverlapping = isFortyMinuteLessonOverlapping(date, bookingList)

  const handleLessonTimeSelection = (date: DateString) => {
    dispatch(lessonBookingActions.setBookingDate(date.toString()))
  }

  const isClickable = !isLessonEnd && !isOverlapping && !isTimeLimit
  const hoverEffect = isClickable ? 'hover:opacity-100' : 'pointer-events-none'
  const heightStyle = isFortyMinuteLesson ? 'h-[46px]' : 'h-[18px]'
  const baseStyle = 'opacity-0'

  const tooltipClasses = `${baseStyle} ${hoverEffect} ${heightStyle}`

  return (
    <Tooltip
      className={tooltipClasses}
      onClick={() => handleLessonTimeSelection(date)}
    >
      {hoursAndMinutes}
    </Tooltip>
  )
}

export default TimeDisplay
