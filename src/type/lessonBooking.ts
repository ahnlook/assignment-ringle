import { LessonDate } from './shared'
import { LessonTicket } from './lessonTicket'
import { Tutor } from './tutor'

export interface LessonBooking {
  id: string
  date: LessonDate
  ticketId: LessonTicket['id']
  tutorId: Tutor['id']
}
