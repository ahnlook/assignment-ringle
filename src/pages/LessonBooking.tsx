import LessonTicketSelector from '../components/LessonTicketSelector'
import Header from '../components/Header'
import Schedule from '../components/Scheduler'
import TutorSelector from '../components/TutorSelector'

const LessonBooking = () => {
  return (
    <div className='h-screen'>
      <LessonTicketSelector />
      <Header />
      <div style={{ height: 'calc(100% - 71px)' }} className='flex'>
        <Schedule />
        <TutorSelector />
      </div>
    </div>
  )
}

export default LessonBooking
