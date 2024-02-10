import { createSlice } from '@reduxjs/toolkit'

const lessonBookingUiSlice = createSlice({
  name: 'lessonBookingUi',
  initialState: {
    lessonTicketModalIsVisible: true,
    tipBoxIsVisible: true
  },
  reducers: {
    openLessonTicketModal(state) {
      state.lessonTicketModalIsVisible = true
    },
    closeLessonTicketModal(state) {
      state.lessonTicketModalIsVisible = false
    },
    closeTipBox(state) {
      state.tipBoxIsVisible = false
    }
  }
})

export const lessonBookingUiActions = lessonBookingUiSlice.actions
export default lessonBookingUiSlice
