export interface LessonTicket {
  id: number
  type: string
  name: string
  durationMinutes: number
  remainingPeriod: number
  unusedTickets: number
  isSelected?: boolean
}
