import { useDispatch, useSelector } from 'react-redux'
import { getMinutes } from 'date-fns'

import { lessonBookingUiActions } from '../../store/lessonBookingUiSlice'
import { lessonBookingActions } from '../../store/lessonBookingSlice'
import { RootState } from '../../store'
import ScheduleTooltip from './ScheduleTooltip'
import ScheduleDeletionModal from '../Modal/ScheduleDeletionModal'
import { formatTime, isFortyMinuteLessonOverlapping } from '../../utils/date'

interface ScheduleBlockProps {
  date: Date
  isFuture: boolean
}

const HalfHourBlock = ({ date, isFuture }: ScheduleBlockProps) => {
  const dispatch = useDispatch()
  const stringDate = date.toString()
  const hoursAndMinutes = formatTime(stringDate)
  const minutes = getMinutes(date)
  const isOnTheHour = minutes === 0

  const { bookingList, selectedDate, selectedTicketId } = useSelector(
    (state: RootState) => state.lessonBooking
  )
  const isTooltipVisible = selectedDate === stringDate
  const bookedLesson = bookingList.find(
    booking => booking.date[0] === stringDate || booking.date[1] === stringDate
  )
  const lessonStartDate = bookedLesson?.date[0]
  const isLessonStart = lessonStartDate === stringDate
  const isLessonEnd = bookedLesson?.date[1] === stringDate

  const selectedBookingTicket = useSelector((state: RootState) =>
    state.lessonTicket.tickets.find(
      ticket => ticket.id === bookedLesson?.ticketId
    )
  )
  const currentLessonDuration = useSelector((state: RootState) => {
    const selectedTicket = state.lessonTicket.tickets.find(
      ticket => ticket.id === selectedTicketId
    )
    return selectedTicket?.durationMinutes
  })
  const isFortyMinuteLesson = currentLessonDuration === 40
  const isOverlapping = isFortyMinuteLessonOverlapping(stringDate, bookingList)

  const handleLessonTimeSelection = (date: Date) => {
    dispatch(lessonBookingActions.setBookingDate(date.toString()))
  }

  const handleLessonClick = () => {
    dispatch(lessonBookingUiActions.openScheduleDeletionAlert())
  }

  return (
    <div
      style={{
        borderTopStyle: `${isOnTheHour ? 'solid' : 'dashed'}`
      }}
      className={`relative h-7 min-h-7 flex justify-start border-t border-r border-gray-200 text-xs ${isFuture || 'bg-gray-200 bg-opacity-40 pointer-events-none'}`}
    >
      <ScheduleTooltip
        className={`opacity-0 ${(isLessonEnd || isOverlapping) && 'pointer-events-none'} ${isLessonEnd || isOverlapping || 'hover:opacity-100'} ${isFortyMinuteLesson ? 'h-[46px]' : 'h-[18px]'}`}
        onClick={() => handleLessonTimeSelection(date)}
      >
        {hoursAndMinutes}
      </ScheduleTooltip>
      {isTooltipVisible && (
        <ScheduleTooltip
          className={`bg-white ${isFortyMinuteLesson ? 'h-[46px]' : 'h-[18px]'}`}
        >
          튜터 선택
        </ScheduleTooltip>
      )}
      {isLessonStart && (
        <ScheduleTooltip
          className={`bg-purple-500 text-white ${selectedBookingTicket?.durationMinutes === 20 ? 'h-[18px]' : 'h-[46px]'}`}
          onClick={handleLessonClick}
        >
          선택 완료
        </ScheduleTooltip>
      )}
      {bookedLesson && <ScheduleDeletionModal schedule={bookedLesson} />}
    </div>
  )
}

export default HalfHourBlock
