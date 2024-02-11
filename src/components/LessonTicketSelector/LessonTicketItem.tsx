import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { lessonBookingActions } from '../../store/lessonBookingSlice'
import { lessonBookingUiActions } from '../../store/lessonBookingUiSlice'
import { LessonTicket } from '../../type/lessonTicket'

const LessonTicketItem = ({ ticket }: { ticket: LessonTicket }) => {
  const { id, type, name, remainingPeriods, unusedTickets } = ticket
  const dispatch = useDispatch()
  const isSelected = useSelector(
    (state: RootState) => state.lessonBooking.selectedTicketId === id
  )

  const handleSelect = () => {
    dispatch(lessonBookingActions.setBookingTicketId(id))
    dispatch(lessonBookingUiActions.closeLessonTicketModal())
  }

  return (
    <div
      className={`flex gap-x-5 p-3 rounded-xl border cursor-pointer ${isSelected ? 'bg-gray-100 border-purple-600' : 'border-gray-100'}`}
      onClick={() => handleSelect()}
    >
      <div className='w-full flex gap-x-5'>
        <div className='h-[42px] w-[42px] flex items-center justify-center flex-none bg-green-500 text-green-600 rounded-full'>
          {type}
        </div>
        <div className='flex-auto'>
          <div className='text-h-4'>{name}</div>
          <div className='text-xs text-gray-500'>
            수강 기간: {remainingPeriods}일 남음
          </div>
        </div>
        <div className='flex-none'>
          <div className='text-xs text-gray-500'>미사용 수업권</div>
          <div className='text-lg text-purple-500 text-right'>
            {unusedTickets}
          </div>
        </div>
      </div>
      <div className='px-3 flex items-center justify-center'>
        <div
          className={`h-[18px] w-[18px] flex items-center justify-center border rounded-full ${isSelected ? 'border-primary' : 'border-gray-300'}`}
        >
          {isSelected && (
            <div
              className={`h-3 w-3 border rounded-full ${isSelected ? 'bg-primary' : 'border-gray-300'}`}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default LessonTicketItem
