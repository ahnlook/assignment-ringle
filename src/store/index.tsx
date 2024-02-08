import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'

import lessonBookingUiSlice from './lessonBookingUi-slice'
import bookedLessonsSlice from './lessonBooking-slice'
import lessonTicketsSlice from './lessonTickets-slice'
import lessonBookingDateSlice from './lessonBookingDate-slice'

export const listenerMiddleware = createListenerMiddleware()

const store = configureStore({
  reducer: {
    lessonBookingUi: lessonBookingUiSlice.reducer,
    bookedLessons: bookedLessonsSlice.reducer,
    lessonTickets: lessonTicketsSlice.reducer,
    lessonBookingDate: lessonBookingDateSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  devTools: import.meta.env.MODE !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export default store
