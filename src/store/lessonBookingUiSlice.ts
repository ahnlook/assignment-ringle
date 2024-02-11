import { createSlice } from '@reduxjs/toolkit'
import { lessonBookingActions } from './lessonBookingSlice'

const lessonBookingUiSlice = createSlice({
  name: 'lessonBookingUi',
  initialState: {
    lessonTicketModalIsVisible: true,
    tipBoxIsVisible: true,
    noTicketAlertIsVisible: false,
    scheduleDeletionAlertIsVisible: false
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
    },
    openNoTicketAlert(state) {
      state.noTicketAlertIsVisible = true
    },
    closeNoTicketAlert(state) {
      state.noTicketAlertIsVisible = false
    },
    openScheduleDeletionAlert(state) {
      state.scheduleDeletionAlertIsVisible = true
    },
    closeScheduleDeletionAlert(state) {
      state.scheduleDeletionAlertIsVisible = false
    }
  },
  extraReducers: builder => {
    builder.addCase(lessonBookingActions.setBookingTicketId, state => {
      state.lessonTicketModalIsVisible = false
    }),
      builder.addCase(lessonBookingActions.cancelBooking, state => {
        state.scheduleDeletionAlertIsVisible = false
      })
  }
})

export const lessonBookingUiActions = lessonBookingUiSlice.actions
export default lessonBookingUiSlice
