import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ScheduleTooltip from './ScheduleTooltip'

const HalfHourBlock = ({
  hour,
  minute,
  isFuture
}: {
  hour: number
  minute: number
  isFuture: boolean
}) => {
  const isOnTheHour = minute === 0
  const lessonDurationMinutes = useSelector((state: RootState) => {
    const selectedTicket = state.lessonTickets.find(ticket => ticket.isSelected)
    return selectedTicket?.durationMinutes ?? 0
  })

  return (
    <div
      style={{
        borderTopStyle: `${isOnTheHour ? 'solid' : 'dashed'}`
      }}
      className={`h-7 flex justify-start border-t border-r border-gray-200 text-xs ${isFuture || 'bg-gray-200 bg-opacity-40 pointer-events-none'}`}
    >
      <ScheduleTooltip
        className={`${lessonDurationMinutes === 20 ? 'h-[20px]' : 'h-[48px]'}`}
      >
        {hour}:{isOnTheHour ? '00' : minute}
      </ScheduleTooltip>
    </div>
  )
}

export default HalfHourBlock
