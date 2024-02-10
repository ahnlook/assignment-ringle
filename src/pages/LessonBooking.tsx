import LessonTicketSelector from '../components/LessonTicketSelector'
import Header from '../components/Header'
import Schedule from '../components/Scheduler'
import TutorSelector from '../components/TutorSelector'

const LessonBooking = () => {
  return (
    <>
      <LessonTicketSelector />
      <Header />
      <div className='h-[80vh] flex'>
        <Schedule />
        <TutorSelector />
      </div>
    </>
  )
}

export default LessonBooking
