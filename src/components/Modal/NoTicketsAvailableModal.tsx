import { useDispatch, useSelector } from 'react-redux'

import { lessonBookingUiActions } from '../../store/lessonBookingUiSlice'
import { RootState } from '../../store'
import Modal from '.'
import Button from '../Button'

const NoTicketsAvailableModal = () => {
  const dispatch = useDispatch()

  const isOpen = useSelector(
    (state: RootState) => state.lessonBookingUi.noTicketAlertIsVisible
  )

  const handleClose = () => {
    dispatch(lessonBookingUiActions.closeNoTicketAlert())
  }

  if (!isOpen) return null
  return (
    <Modal onClose={handleClose}>
      <div>남은 수업권이 없습니다. 다른 수업권을 선택해 주세요.</div>
      <div className='flex justify-end mt-6'>
        <Button onClick={handleClose}>확인</Button>
      </div>
    </Modal>
  )
}

export default NoTicketsAvailableModal
