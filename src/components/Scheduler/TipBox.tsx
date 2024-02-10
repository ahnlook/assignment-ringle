import { useDispatch } from 'react-redux'
import { lessonBookingUiActions } from '../../store/lessonBookingUi-slice'

const TIPS = [
  '주 1회 이상 꾸준히 공부해야 영어 실력이 늘어요.',
  '수업을 미리 예약하면 나와 더 잘 맞는 튜터를 만날 수 있어요.',
  '튜터의 수업이 빠르게 마감될 수 있습니다. 미리 예약해보세요.'
]

const TipBox = () => {
  const dispatch = useDispatch()
  const randomIndex = Math.floor(Math.random() * TIPS.length)
  const randomTip = TIPS[randomIndex]

  const handleTipBoxClose = () => {
    dispatch(lessonBookingUiActions.closeTipBox())
  }

  return (
    <div className='flex justify-between items-center px-4 py-3 my-4 bg-purple-50 text-h-5 rounded-md text-nowrap'>
      <div>
        <span className='text-purple-500 pr-2'>Ringle's Tip</span>
        <span>{randomTip}</span>
      </div>
      <button className='flex' onClick={handleTipBoxClose}>
        <i className='material-symbols-outlined pl-2'>close</i>
      </button>
    </div>
  )
}

export default TipBox
