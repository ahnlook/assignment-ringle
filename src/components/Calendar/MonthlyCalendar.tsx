import { useDispatch, useSelector } from 'react-redux'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { ko } from 'date-fns/locale'

import { lessonSchedulerActions } from '../../store/lessonScheduler-slice'
import { RootState } from '../../store'

const today = new Date()
const MonthlyCalendar = () => {
  const dispatch = useDispatch()
  const { from, to } = useSelector(
    (state: RootState) => state.lessonScheduler.currentWeek
  )
  const range = { from: new Date(from), to: new Date(to) }

  const handleDayClick = (day: Date) => {
    dispatch(lessonSchedulerActions.setCurrentWeek(day.toString()))
  }

  return (
    <>
      <style>{css}</style>
      <div className='mt-8 p-2.5 text-xs'>
        <DayPicker
          mode='range'
          selected={range}
          defaultMonth={today}
          fromDate={today}
          locale={ko}
          showOutsideDays
          onDayClick={handleDayClick}
          modifiersClassNames={{
            selected: 'my-selected'
          }}
        />
      </div>
    </>
  )
}

export default MonthlyCalendar

const css = `
.my-selected {
  color: black;
  background-color: #E4E7F4;
}
.rdp {
  --rdp-cell-size: 32px;
  --rdp-caption-font-size: 14px;
}
`
