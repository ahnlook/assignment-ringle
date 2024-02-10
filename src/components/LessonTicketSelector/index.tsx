import { useDispatch, useSelector } from 'react-redux'

import { lessonBookingUiActions } from '../../store/lessonBookingUi-slice'
import { RootState } from '../../store'
import { LessonTicket } from '../../type/lessonTicket'
import LessonTicketItem from './LessonTicketItem'
import Modal from '../Modal'

const LessonTicketSelector = () => {
  const dispatch = useDispatch()
  const { tickets } = useSelector((state: RootState) => state.lessonTicket)

  const handleClose = () => {
    dispatch(lessonBookingUiActions.closeLessonTicketModal())
  }

  return (
    <Modal onClose={handleClose}>
      <div className='flex justify-between'>
        <div className=''>
          <p className='text-h-2'>수업권 선택</p>
        </div>
        <div className='w-5 h-5'>
          <button onClick={handleClose}>
            <i className='material-symbols-outlined'>close</i>
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-y-4'>
        {tickets.map((ticket: LessonTicket) => (
          <LessonTicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </Modal>
  )
}

export default LessonTicketSelector
