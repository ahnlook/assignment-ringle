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
        state.selectedTutorId = action.payload.tutorId
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
    setBookingDate(state, action: PayloadAction<DateString>) {
      state.selectedDate = action.payload
      state.selectedTutorId = null
    },
    setBookingTicketId(state, action: PayloadAction<LessonTicket['id']>) {
      state.selectedTicketId = action.payload
      state.selectedDate = null
      state.selectedTutorId = null
    },
    setBookingTutorId(state, action: PayloadAction<Tutor['id'] | null>) {
      state.selectedTutorId = action.payload
    },
    changeBookingTutorId: (
      state,
      action: PayloadAction<{
        newTutorId: Tutor['id']
      }>
    ) => {
      const { newTutorId } = action.payload
      state.selectedTutorId = newTutorId
      state.bookingList[state.bookingList.length - 1].tutorId = newTutorId
    },
    cancelBooking(state, action: PayloadAction<LessonBooking>) {
      const index = state.bookingList.findIndex(
        booking => booking.id === action.payload.id
      )
      state.bookingList.splice(index, 1)
      state.selectedDate = null
      state.selectedTutorId = null
    }
  }
})

export const lessonBookingActions = lessonBookingSlice.actions
export default lessonBookingSlice
