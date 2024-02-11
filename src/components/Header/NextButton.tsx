import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Button from '../Button'

const NextButton = () => {
  const isDisabled =
    useSelector(
      (state: RootState) => state.lessonBooking.bookingList.length
    ) === 0

  return <Button isDisabled={isDisabled}>다음</Button>
}

export default NextButton
