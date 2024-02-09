import { configureStore } from '@reduxjs/toolkit'

import lessonBookingUiSlice from './lessonBookingUi-slice'
import lessonBookingSlice from './lessonBooking-slice'
import lessonTicketsSlice from './lessonTicket-slice'
import lessonSchedulerSlice from './lessonScheduler-slice'
import tutorSlice from './tutor-slice'

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
