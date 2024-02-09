import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'

import { lessonBookingUiActions } from '../../store/lessonBookingUi-slice'
import { RootState } from '../../store'
import { LessonTicket } from '../../type/lessonTicket'
import useOutsideClick from '../../hooks/useOutsideClick'
import Dimmed from './Dimmed'
import LessonTicketItem from './LessonTicketItem'

const LessonTicketSelector = () => {
  const dispatch = useDispatch()
  const modalRef = useRef<HTMLDivElement>(null)
  const { tickets } = useSelector((state: RootState) => state.lessonTicket)
  useOutsideClick(modalRef, () => {
    dispatch(lessonBookingUiActions.closeLessonTicketModal())
  })

  return createPortal(
    <>
      <Dimmed />
      <div className='fixed inset-0 h-screen flex items-center justify-center opacity-100 translate-y-0'>
        <div
          className='w-full max-w-[724px] p-8 flex flex-col gap-y-4 rounded-2xl bg-white shadow-lg'
          ref={modalRef}
        >
          <div className='flex justify-between'>
            <div className=''>
              <p className='text-h-2'>수업권 선택</p>
            </div>
            <div className='w-5 h-5'>
              <button
                onClick={() => {
                  dispatch(lessonBookingUiActions.closeLessonTicketModal())
                }}
              >
                <i className='material-symbols-outlined'>close</i>
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-y-4'>
            {tickets.map((ticket: LessonTicket) => (
              <LessonTicketItem key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}

export default LessonTicketSelector
