import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

import { RootState } from '../../store'
import TutorItem from './TutorItem'
import TutorSelectionMessage from './TutorSelectionMessage'

const TutorSelector = () => {
  const tutors = useSelector((state: RootState) => state.tutor.tutors)
  const selectedDate = useSelector(
    (state: RootState) => state.lessonBooking.selectedDate
  )

  return (
    <div className='w-[347px] min-w-[347px] ml-2'>
      {!selectedDate ? (
        <TutorSelectionMessage />
      ) : (
        <>
          <div className='p-5 text-h-4 border-b'>
            {format(selectedDate, 'M월 d일(E) HH:mm', { locale: ko })}
          </div>
          <div>
            {tutors.map(tutor => (
              <TutorItem key={tutor.id} tutor={tutor} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default TutorSelector
