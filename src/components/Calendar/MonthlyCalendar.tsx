import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { ko } from 'date-fns/locale'
import { useDispatch, useSelector } from 'react-redux'
import { lessonBookingDateActions } from '../../store/lessonBookingDate-slice'
import { RootState } from '../../store'

const today = new Date()
const MonthlyCalendar = () => {
  const dispatch = useDispatch()
  const range = useSelector(
    (state: RootState) => state.lessonBookingDate.currentWeek
  )

  const handleDayClick = (day: Date) => {
    dispatch(lessonBookingDateActions.setWeek(day))
  }

  return (
    <>
      <style>{css}</style>
      <div className='p-2.5'>
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

const css = `.my-selected {
  color: black;
  background-color: #E4E7F4;
}`
