import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

import { LessonBooking } from '../type/lessonBooking'
import { DateString } from '../type/shared'
import { LessonTicket } from '../type/lessonTicket'
import { Tutor } from '../type/tutor'

interface lessonBookingState {
  bookingList: LessonBooking[]
  selectedDate: DateString | null
  selectedTicketId: LessonTicket['id']
  selectedTutorId: Tutor['id'] | null
}

const initialState: lessonBookingState = {
  bookingList: [],
  selectedDate: null,
  selectedTicketId: '1',
  selectedTutorId: null
}

const lessonBookingSlice = createSlice({
  name: 'lessonBooking',
  initialState,
  reducers: {
    booking: {
      reducer(state, action: PayloadAction<LessonBooking>) {
        state.bookingList.push(action.payload)
        state.selectedDate = null
        // state.selectedTutorId = null
      },
      prepare(bookingInfo: Omit<LessonBooking, 'id'>) {
        return {
          payload: {
            ...bookingInfo,
            id: nanoid()
          }
        }
      }
    },
    setBookingDate(state, action) {
      state.selectedDate = action.payload
    },
    setBookingTicketId(state, action) {
      state.selectedTicketId = action.payload
    },
    setBookingTutorId(state, action) {
      state.selectedTutorId = action.payload
    }
  }
})

export const lessonBookingActions = lessonBookingSlice.actions
export default lessonBookingSlice
