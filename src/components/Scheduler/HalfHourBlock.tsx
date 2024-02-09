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
    (state: RootState) =>
      state.lessonBooking.selectedDate === date.toISOString()
  )

  const bookedLesson = useSelector((state: RootState) =>
    state.lessonBooking.bookingList.find(
      booking => booking.date === date.toISOString()
    )
  )

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
    dispatch(lessonBookingActions.setBookingDate(date))
  }

  return (
    <div
      style={{
        borderTopStyle: `${isOnTheHour ? 'solid' : 'dashed'}`
      }}
      className={`relative h-7 flex justify-start border-t border-r border-gray-200 text-xs ${isFuture || 'bg-gray-200 bg-opacity-40 pointer-events-none'}`}
    >
      <ScheduleTooltip
        className={`absolute inset-0 opacity-0 hover:opacity-100 ${lessonDurationMinutes === 20 ? 'h-[18px]' : 'h-[46px]'}`}
        onClick={() => handleSetLessonTime(date)}
      >
        {hours}:{minutes || '00'}
      </ScheduleTooltip>
      {showTooltip && (
        <ScheduleTooltip
          className={`absolute inset-0 bg-white ${lessonDurationMinutes === 20 ? 'h-[18px]' : 'h-[46px]'}`}
          onClick={() => console.log('clicked')}
        >
          튜터 선택
        </ScheduleTooltip>
      )}
      {bookedLesson && (
        <ScheduleTooltip
          className={`absolute inset-0 bg-white ${bookingTicket?.durationMinutes === 20 ? 'h-[18px]' : 'h-[46px]'}`}
          onClick={() => console.log('clicked')}
        >
          선택 완료
        </ScheduleTooltip>
      )}
    </div>
  )
}

export default HalfHourBlock
