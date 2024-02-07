export interface LessonTicket {
  id: number
  type: string
  name: string
  remainingPeriod: number
  unusedTickets: number
  isSelected: boolean
}
