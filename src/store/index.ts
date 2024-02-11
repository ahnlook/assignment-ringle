import { configureStore } from '@reduxjs/toolkit'

import lessonBookingUiSlice from './lessonBookingUiSlice'
import lessonBookingSlice from './lessonBookingSlice'
import lessonTicketsSlice from './lessonTicketSlice'
import lessonSchedulerSlice from './lessonSchedulerSlice'
import tutorSlice from './tutorSlice'

const store = configureStore({
  reducer: {
    lessonBookingUi: lessonBookingUiSlice.reducer,
    lessonBooking: lessonBookingSlice.reducer,
    lessonTicket: lessonTicketsSlice.reducer,
    lessonScheduler: lessonSchedulerSlice.reducer,
    tutor: tutorSlice.reducer
  },
  devTools: import.meta.env.MODE !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export default store
