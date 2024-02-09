import { useDispatch, useSelector } from 'react-redux'

import { lessonBookingActions } from '../../store/lessonBooking-slice'
import { RootState } from '../../store'
import { Tutor } from '../../type/tutor'

const TutorItem = ({ tutor }: { tutor: Tutor }) => {
  const { id, name, university, major, acceptanceRate, tag } = tutor
  const dispatch = useDispatch()
  const date = useSelector(
    (state: RootState) => state.lessonBooking.selectedDate
  )
  const ticketId = useSelector(
    (state: RootState) => state.lessonBooking.selectedTicketId
  )
  const ticket = useSelector((state: RootState) =>
    state.lessonTicket.tickets.find(ticket => ticket.id === ticketId)
  )

  const onTutorClick = () => {
    if (!date) return
    if (!ticketId) return
    if (!ticket) return
    if (ticket.unusedTickets <= 0) {
      alert('수업권이 부족합니다')
      dispatch(lessonBookingActions.setBookingTutorId(null))
      return
    }

    dispatch(
      lessonBookingActions.booking({
        date,
        ticketId,
        tutorId: id
      })
    )
  }

  return (
    <button className='w-full p-4 text-left border-b' onClick={onTutorClick}>
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
