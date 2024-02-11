import { isAfter, isSameDay, startOfDay } from 'date-fns'

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
