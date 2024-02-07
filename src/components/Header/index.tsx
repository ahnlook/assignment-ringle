import BackButton from './BackButton'
import LessonTicketButton from './LessonTicketButton'
import LessonBookingCount from './LessonBookingCount'
import NextButton from './NextButton'
import HeaderTitle from './HeaderTitle'

const Header = () => {
  return (
    <div className='min-h-[71px] min-w-[790px] flex lg:flex-row flex-col gap-y-2 items-center justify-between px-6 bg-gray-50 border-b border-gray-200'>
      <div className='flex gap-x-6'>
        <BackButton />
        <HeaderTitle />
        <LessonTicketButton />
      </div>
      <div className='flex gap-x-6'>
        <LessonBookingCount />
        <NextButton />
      </div>
    </div>
  )
}

export default Header
