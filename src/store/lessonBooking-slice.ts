import { createSlice } from '@reduxjs/toolkit'

import { LessonTicket } from '../type/lessonBooking'

const bookedLessons: LessonTicket[] = []

const bookedLessonsSlice = createSlice({
  name: 'bookedLessons',
  initialState: bookedLessons,
  reducers: {
    bookLesson(state, action) {
      const bookedLesson = action.payload
      state.push(bookedLesson)
    }
  }
})

export const lessonBookingActions = bookedLessonsSlice.actions
export default bookedLessonsSlice
