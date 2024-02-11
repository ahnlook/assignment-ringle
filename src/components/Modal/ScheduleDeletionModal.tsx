import { useDispatch, useSelector } from 'react-redux'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

import { lessonBookingActions } from '../../store/lessonBookingSlice'
import { RootState } from '../../store'
import Modal from '.'
import Button from '../Button'
import { LessonBooking } from '../../type/lessonBooking'

interface ScheduleDeletionModalProps {
  schedule: LessonBooking
  onClose: () => void
}

const ScheduleDeletionModal = ({
  schedule,
  onClose
}: ScheduleDeletionModalProps) => {
  const dispatch = useDispatch()
  const tutorName = useSelector(
    (state: RootState) =>
      state.tutor.tutors.find(tutor => tutor.id === schedule?.tutorId)?.name
  )

  const handleLessonCancel = (schedule: LessonBooking) => {
    dispatch(lessonBookingActions.cancelBooking(schedule))
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <div className='flex flex-col gap-y-2'>
        <div>
          {schedule &&
            format(schedule.date[0], 'M월 d일(E) HH:mm', {
              locale: ko
            })}
        </div>
        <div>{tutorName}</div>
        <div>이 수업을 삭제하시겠습니까?</div>
        <div className='flex justify-end gap-x-2 mt-6'>
          <Button
            className='border border-purple-800 bg-white text-black'
            onClick={onClose}
          >
            취소
          </Button>
          <Button onClick={() => handleLessonCancel(schedule)}>확인</Button>
        </div>
      </div>
    </Modal>
  )
}

export default ScheduleDeletionModal
