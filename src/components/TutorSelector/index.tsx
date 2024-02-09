import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import TutorItem from './TutorItem'
import TutorSelectionMessage from './TutorSelectionMessage'

const TutorSelector = () => {
  const tutors = useSelector((state: RootState) => state.tutor.tutors)
  const isDateSelected = useSelector((state: RootState) =>
    Boolean(state.lessonBooking.selectedDate)
  )

  return (
    <div className='h-screen w-[347px] min-w-[347px] ml-2'>
      {!isDateSelected ? (
        <TutorSelectionMessage />
      ) : (
        <div>
          {tutors.map(tutor => (
            <TutorItem key={tutor.id} tutor={tutor} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TutorSelector
