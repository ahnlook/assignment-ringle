import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const NextButton = () => {
  const isDisabled =
    useSelector((state: RootState) => state.bookedLessons).length === 0

  return (
    <button
      className={`w-[150px] min-h-[42px] p-2.5 text-[14px] rounded ${isDisabled ? 'bg-gray-200 text-gray-300' : 'bg-purple-500 text-white'}`}
    >
      다음
    </button>
  )
}

export default NextButton
