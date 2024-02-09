import { useDispatch, useSelector } from 'react-redux'

import { lessonBookingUiActions } from '../../store/lessonBookingUi-slice'
import { RootState } from '../../store'

const LessonTicketButton = () => {
  const dispatch = useDispatch()
  const selectedTicketId = useSelector(
    (state: RootState) => state.lessonBooking.selectedTicketId
  )
  const selectedTicket = useSelector((state: RootState) =>
    state.lessonTicket.tickets.find(ticket => ticket.id === selectedTicketId)
  )

  const handleClick = () => {
    dispatch(lessonBookingUiActions.openLessonTicketModal())
  }

  return (
    <button
      className='min-w-[360px] max-h-10 flex items-center justify-between px-4 py-2 bg-white text-sm border border-gray-300 rounded-md'
      onClick={() => handleClick()}
    >
      <div className='flex items-center gap-x-2'>
        <div className='px-2 bg-green-500 text-green-600 text-xs rounded'>
          {selectedTicket?.type}
        </div>
        <div className='font-medium'>{selectedTicket?.name}</div>
        <div>({selectedTicket?.unusedTickets}회 남음)</div>
      </div>
      <i className='material-symbols-outlined text-[19px]'>expand_more</i>
    </button>
  )
}

export default LessonTicketButton
