import { DateString, LessonDate } from '../type/shared'

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
