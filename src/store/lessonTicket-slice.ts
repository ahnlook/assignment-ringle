import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { LessonTicket } from '../type/lessonTicket'
import { lessonBookingActions } from './lessonBooking-slice'
import { LessonBooking } from '../type/lessonBooking'

const DUMMY_LESSON_TICKETS: LessonTicket[] = [
  {
    id: '1',
    type: '20분',
    name: '1:1 회화(20분)',
    durationMinutes: 20,
    remainingPeriods: 30,
    unusedTickets: 5
  },
  {
    id: '2',
    type: '40분',
    name: '1회 패키지',
    durationMinutes: 40,
    remainingPeriods: 45,
    unusedTickets: 1
  }
]

const initialState = { tickets: DUMMY_LESSON_TICKETS }

const lessonTicketSlice = createSlice({
  name: 'lessonTicket',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(lessonBookingActions.booking, (state, action) => {
      const { ticketId } = action.payload
      const usedTicket = state.tickets.find(ticket => ticket.id === ticketId)
      if (usedTicket) usedTicket.unusedTickets--
    }),
      builder.addCase(
        lessonBookingActions.cancelBooking,
        (state, action: PayloadAction<LessonBooking>) => {
          const { ticketId } = action.payload
          const usedTicket = state.tickets.find(
            ticket => ticket.id === ticketId
          )
          if (usedTicket) usedTicket.unusedTickets++
        }
      )
  }
})

export const lessonTicketActions = lessonTicketSlice.actions
export default lessonTicketSlice
