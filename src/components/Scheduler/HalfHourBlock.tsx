import { useDispatch, useSelector } from 'react-redux'
import { getHours, getMinutes } from 'date-fns'

import { RootState } from '../../store'
import { lessonBookingActions } from '../../store/lessonBooking-slice'
import ScheduleTooltip from './ScheduleTooltip'

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

  const showTooltip = useSelector(
    (state: RootState) => state.lessonBooking.selectedDate === date.toString()
  )

  const bookedLesson = useSelector((state: RootState) =>
    state.lessonBooking.bookingList.find(
      booking =>
        booking.date[0] === date.toString() ||
        booking.date[1] === date.toString()
    )
  )
  const isStart = bookedLesson?.date[0] === date.toString()
  const isEnd = bookedLesson?.date[1] === date.toString()

  const bookingTicket = useSelector((state: RootState) =>
    state.lessonTicket.tickets.find(
      ticket => ticket.id === bookedLesson?.ticketId
    )
  )

  const selectedTicketId = useSelector(
    (state: RootState) => state.lessonBooking.selectedTicketId
  )

  const lessonDurationMinutes = useSelector((state: RootState) => {
    const selectedTicket = state.lessonTicket.tickets.find(
      ticket => ticket.id === selectedTicketId
    )
    return selectedTicket?.durationMinutes
  })

  const handleSetLessonTime = (date: Date) => {
    dispatch(lessonBookingActions.setBookingDate(date.toString()))
  }

  return (
    <div
      style={{
        borderTopStyle: `${isOnTheHour ? 'solid' : 'dashed'}`
      }}
      className={`relative h-7 min-h-7 flex justify-start border-t border-r border-gray-200 text-xs ${isFuture || 'bg-gray-200 bg-opacity-40 pointer-events-none'}`}
    >
      <ScheduleTooltip
        className={`opacity-0 ${isEnd || 'hover:opacity-100'} ${lessonDurationMinutes === 20 ? 'h-[18px]' : 'h-[46px]'}`}
        onClick={() => handleSetLessonTime(date)}
      >
        {hours}:{minutes || '00'}
      </ScheduleTooltip>
      {showTooltip && (
        <ScheduleTooltip
          className={`bg-white ${lessonDurationMinutes === 20 ? 'h-[18px]' : 'h-[46px]'}`}
        >
          튜터 선택
        </ScheduleTooltip>
      )}
      {isStart && (
        <ScheduleTooltip
          className={`bg-purple-500 text-white ${bookingTicket?.durationMinutes === 20 ? 'h-[18px]' : 'h-[46px]'}`}
          onClick={() => console.log('clicked')}
        >
          선택 완료
        </ScheduleTooltip>
      )}
    </div>
  )
}

export default HalfHourBlock
