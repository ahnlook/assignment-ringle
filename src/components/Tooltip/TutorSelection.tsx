import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import Tooltip from '.'
import { DateString } from '../../type/shared'

interface TutorSelectionProps {
  date: DateString
}

const TutorSelection = ({ date }: TutorSelectionProps) => {
  const { selectedDate, selectedTicketId } = useSelector(
    (state: RootState) => state.lessonBooking
  )

  const isTooltipVisible = selectedDate === date
  const currentLessonDuration = useSelector((state: RootState) => {
    const selectedTicket = state.lessonTicket.tickets.find(
      ticket => ticket.id === selectedTicketId
    )
    return selectedTicket?.durationMinutes
  })
  const isFortyMinuteLesson = currentLessonDuration === 40

  if (!isTooltipVisible) return null
  return (
    <Tooltip
      className={`bg-white ${isFortyMinuteLesson ? 'h-[46px]' : 'h-[18px]'}`}
    >
      튜터 선택
    </Tooltip>
  )
}

export default TutorSelection
