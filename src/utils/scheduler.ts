import { isAfter, isSameDay, startOfDay } from 'date-fns'

// NOTE: 30분 간격으로 24시간을 나타내는 시간 슬롯을 계산
export const calculateTimeSlots = (date: Date, now: Date) =>
  Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2)
    const minute = (i % 2) * 30
    const timeSlotDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hour,
      minute
    )
    const isToday = isSameDay(date, now)
    const isFutureTimeSlot = isToday
      ? isAfter(timeSlotDate, now)
      : isAfter(timeSlotDate, startOfDay(now))

    return { timeSlotDate, isFutureTimeSlot }
  })
