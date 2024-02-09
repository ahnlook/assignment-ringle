import { LessonDuration } from './shared'

export interface LessonTicket {
  id: string
  type: string
  name: string
  durationMinutes: LessonDuration
  remainingPeriods: number
  unusedTickets: number
}
