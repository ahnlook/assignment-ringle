import { useDispatch, useSelector } from 'react-redux'

import { lessonBookingUiActions } from '../../store/lessonBookingUiSlice'
import { lessonBookingActions } from '../../store/lessonBookingSlice'
import { RootState } from '../../store'
import { Tutor } from '../../type/tutor'
import { DateString, LessonDate } from '../../type/shared'

interface TutorItemProps {
  tutor: Tutor
}

const TutorItem = ({ tutor }: TutorItemProps) => {
  const { id, name, university, major, acceptanceRate, tag } = tutor
  const dispatch = useDispatch()

  const {
    selectedDate: date,
    selectedTicketId: ticketId,
    selectedTutorId
  } = useSelector((state: RootState) => state.lessonBooking)

  const ticket = useSelector((state: RootState) =>
    state.lessonTicket.tickets.find(ticket => ticket.id === ticketId)
  )

  const isSelected = selectedTutorId === id

  const onTutorClick = () => {
    if (!date) return
    if (!ticketId) return
    if (!ticket) return

    const lessonDate = (date: DateString): LessonDate => {
      if (ticket.durationMinutes === 40) {
        const start = new Date(date)
        const end = new Date(
          start.setMinutes(start.getMinutes() + 30)
        ).toString()
        return [date, end]
      }
      return [date]
    }

    if (selectedTutorId) {
      dispatch(
        lessonBookingActions.changeBookingTutorId({
          newTutorId: id
        })
      )
      return
    }

    if (ticket.unusedTickets <= 0) {
      dispatch(lessonBookingUiActions.openNoTicketAlert())
      dispatch(lessonBookingActions.setBookingTutorId(null))
      return
    }

    dispatch(
      lessonBookingActions.booking({
        date: lessonDate(date),
        ticketId,
        tutorId: id
      })
    )
  }

  return (
    <button
      className={`w-full p-4 text-left border-b hover:bg-purple-50 hover:shadow-md ${isSelected && 'bg-purple-50 border-y border-purple-500'}`}
      onClick={onTutorClick}
    >
      <div className='text-h-2'>{name}</div>
      <div className='text-h-5'>{university}</div>
      <div className='text-gray-500 text-sm'>{major}</div>
      <div className=' text-sm'>
        <span className='text-gray-500'>수락률 </span>
        <span>{acceptanceRate}%</span>
      </div>
      <div className='inline-block px-1.5 bg-gray-100 text-gray-700 text-h-6 rounded-md'>
        {tag}
      </div>
    </button>
  )
}

export default TutorItem
