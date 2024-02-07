import Dimmed from './Dimmed'
import LessonTicketItem from './LessonTicketItem'

const DUMMY_LESSON_TICKETS = [
  {
    id: 1,
    type: '20분',
    name: '1:1 회화(20분)',
    remainingPeriod: 30,
    unusedTickets: 5,
    isSelected: true
  },
  {
    id: 2,
    type: '40분',
    name: '1회 패키지',
    remainingPeriod: 45,
    unusedTickets: 1,
    isSelected: false
  }
]

const LessonTicketSelector = () => {
  return (
    <>
      <Dimmed />
      <div className='h-screen flex items-center justify-center opacity-100 translate-y-0'>
        <div className='w-full max-w-[724px] p-8 flex flex-col gap-y-4 rounded-2xl bg-white shadow-lg'>
          <div className='flex justify-between'>
            <div className=''>
              <p className='text-h-2'>수업권 선택</p>
            </div>
            <div className='w-5 h-5'>
              <button
                onClick={() => {
                  // TODO: close modal
                }}
              >
                <span className='material-symbols-outlined'>close</span>
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-y-4'>
            {DUMMY_LESSON_TICKETS.map(ticket => (
              <LessonTicketItem
                key={ticket.id}
                id={ticket.id}
                type={ticket.type}
                name={ticket.name}
                remainingPeriod={ticket.remainingPeriod}
                unusedTickets={ticket.unusedTickets}
                isSelected={ticket.isSelected}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LessonTicketSelector
