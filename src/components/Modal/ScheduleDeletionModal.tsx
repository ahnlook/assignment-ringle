import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

import Modal from '.'
import Button from '../Button'
import { LessonBooking } from '../../type/lessonBooking'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { lessonBookingActions } from '../../store/lessonBooking-slice'
import { lessonBookingUiActions } from '../../store/lessonBookingUi-slice'

interface ScheduleDeletionModalProps {
  schedule: LessonBooking
}

const ScheduleDeletionModal = ({ schedule }: ScheduleDeletionModalProps) => {
  const dispatch = useDispatch()

  const isOpen = useSelector(
    (state: RootState) => state.lessonBookingUi.scheduleDeletionAlertIsVisible
  )

  const lessonBooking = useSelector((state: RootState) =>
    state.lessonBooking.bookingList.find(booking => booking.id === schedule.id)
  )

  const tutor = useSelector((state: RootState) =>
    state.tutor.tutors.find(tutor => tutor.id === lessonBooking?.tutorId)
  )

  const handleClose = () => {
    dispatch(lessonBookingUiActions.closeScheduleDeletionAlert())
  }

  const handleLessonCancel = (schedule: LessonBooking) => {
    dispatch(lessonBookingActions.cancelBooking(schedule))
    handleClose()
  }

  return (
    <>
      {isOpen && (
        <Modal onClose={handleClose}>
          <div className='flex flex-col gap-y-2'>
            <div>
              {lessonBooking &&
                format(lessonBooking.date[0], 'M월 d일(E) HH:mm', {
                  locale: ko
                })}
            </div>
            <div>{tutor?.name}</div>
            <div>이 수업을 삭제하시겠습니까?</div>
            <div className='flex justify-end gap-x-2 mt-6'>
              <Button
                className='bg-white text-purple-800 border border-purple-800'
                onClick={handleClose}
              >
                취소
              </Button>
              <Button onClick={() => handleLessonCancel(schedule)}>확인</Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default ScheduleDeletionModal
