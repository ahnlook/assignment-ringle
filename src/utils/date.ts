import { getHours, getMinutes } from 'date-fns'

import { DateString, LessonDate } from '../type/shared'
import { LessonBooking } from '../type/lessonBooking'

// NOTE: 주어진 시작 날짜와 수업의 지속 시간을 기반으로 수업의 시작과 종료 날짜를 계산
export const calculateLessonDate = (
  date: DateString,
  durationMinutes: number
): LessonDate => {
  if (durationMinutes === 40) {
    const start = new Date(date)
    const end = new Date(start.setMinutes(start.getMinutes() + 30))
    return [date, end.toString()]
  }
  return [date]
}

// NOTE: 날짜 객체에서 시간과 분을 포맷팅된 문자열로 반환
export const formatTime = (date: DateString) => {
  const hours = getHours(date)
  const minutes = getMinutes(date).toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

// NOTE: 40분 수업이 다음 수업과 중복되는지 검사
export const isFortyMinuteLessonOverlapping = (
  date: DateString,
  bookingList: LessonBooking[]
) => {
  const newDate = new Date(date)
  const thirtyMinutesLater = new Date(
    newDate.setMinutes(newDate.getMinutes() + 30)
  ).toString()
  return bookingList.some(booking => booking.date[0] === thirtyMinutesLater)
}
