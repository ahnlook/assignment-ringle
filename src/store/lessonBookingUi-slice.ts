import { createSlice } from '@reduxjs/toolkit'

const lessonBookingUiSlice = createSlice({
  name: 'lessonBookingUi',
  initialState: {
    lessonTicketModalIsVisible: true
  },
  reducers: {
    openLessonTicketModal(state) {
      state.lessonTicketModalIsVisible = true
    },
    closeLessonTicketModal(state) {
      state.lessonTicketModalIsVisible = false
    }
  }
})

export const lessonBookingUiActions = lessonBookingUiSlice.actions
export default lessonBookingUiSlice
