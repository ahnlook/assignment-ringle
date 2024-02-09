import { configureStore } from '@reduxjs/toolkit'

import lessonBookingUiSlice from './lessonBookingUi-slice'
import bookedLessonsSlice from './lessonBooking-slice'
import lessonTicketsSlice from './lessonTickets-slice'
import lessonBookingDateSlice from './lessonBookingDate-slice'

const store = configureStore({
  reducer: {
    lessonBookingUi: lessonBookingUiSlice.reducer,
    bookedLessons: bookedLessonsSlice.reducer,
    lessonTickets: lessonTicketsSlice.reducer,
    lessonBookingDate: lessonBookingDateSlice.reducer
  },
  devTools: import.meta.env.MODE !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export default store
