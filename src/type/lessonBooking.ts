import { ISODate } from './shared'
import { LessonTicket } from './lessonTicket'
import { Tutor } from './tutor'

export interface LessonBooking {
  id: string
  date: ISODate
  ticketId: LessonTicket['id']
  tutorId: Tutor['id']
}
