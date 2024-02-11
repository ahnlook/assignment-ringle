import { useDispatch, useSelector } from 'react-redux'
import { getHours, getMinutes } from 'date-fns'

import { lessonBookingUiActions } from '../../store/lessonBookingUi-slice'
import { lessonBookingActions } from '../../store/lessonBooking-slice'
import { RootState } from '../../store'
import ScheduleTooltip from './ScheduleTooltip'
import ScheduleDeletionModal from '../Modal/ScheduleDeletionModal'

const HalfHourBlock = ({
  date,
  isFuture
}: {
  date: Date
  isFuture: boolean
}) => {
  const dispatch = useDispatch()
  const hours = getHours(date)
  const minutes = getMinutes(date)
  const isOnTheHour = minutes === 0

  const { bookingList, selectedDate, selectedTicketId } = useSelector(
    (state: RootState) => state.lessonBooking
  )
  const isTooltipVisible = selectedDate === date.toString()
  const bookedLesson = bookingList.find(
    booking =>
      booking.date[0] === date.toString() || booking.date[1] === date.toString()
  )
  const lessonStartDate = bookedLesson?.date[0]
  const isLessonStart = lessonStartDate === date.toString()
  const isLessonEnd = bookedLesson?.date[1] === date.toString()

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

  const newDate = new Date(date)
  const thirtyMinutesLater = new Date(
    newDate.setMinutes(newDate.getMinutes() + 30)
  ).toString()
  const isScheduleOverlapping = isFortyMinuteLesson
    ? bookingList.some(booking => booking.date[0] === thirtyMinutesLater)
    : false

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
        className={`opacity-0 ${(isLessonEnd || isScheduleOverlapping) && 'pointer-events-none'} ${isLessonEnd || isScheduleOverlapping || 'hover:opacity-100'} ${isFortyMinuteLesson ? 'h-[46px]' : 'h-[18px]'}`}
        onClick={() => handleLessonTimeSelection(date)}
      >
        {hours}:{minutes || '00'}
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
