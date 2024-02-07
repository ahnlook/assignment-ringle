import { useSelector } from 'react-redux'

import { RootState } from '../../store'

const LessonBookingCount = () => {
  const bookingCount = useSelector(
    (state: RootState) => state.bookedLessons
  ).length

  return (
    <div className='flex items-center gap-x-2'>
      <span className='text-sm'>예약 신청한 수업</span>
      <span className='text-primary font-medium'>{bookingCount}</span>
    </div>
  )
}

export default LessonBookingCount
