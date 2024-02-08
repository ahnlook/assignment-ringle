import { createSlice } from '@reduxjs/toolkit'

import { LessonTicket } from '../type/lessonBooking'

const DUMMY_LESSON_TICKETS: LessonTicket[] = [
  {
    id: 1,
    type: '20분',
    name: '1:1 회화(20분)',
    durationMinutes: 20,
    remainingPeriod: 30,
    unusedTickets: 5,
    isSelected: true
  },
  {
    id: 2,
    type: '40분',
    name: '1회 패키지',
    durationMinutes: 40,
    remainingPeriod: 45,
    unusedTickets: 1,
    isSelected: false
  }
]

const lessonTicketSlice = createSlice({
  name: 'lessonTicket',
  initialState: DUMMY_LESSON_TICKETS,
  reducers: {
    selectLessonTicket(state, action) {
      const selectedId = action.payload
      state.forEach(ticket => {
        ticket.isSelected = ticket.id === selectedId
      })
    }
  }
})

export const lessonTicketActions = lessonTicketSlice.actions
export default lessonTicketSlice
