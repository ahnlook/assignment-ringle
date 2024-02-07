import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'

import lessonBookingUiSlice from './lessonBookingUi-slice'
import lessonTicketsSlice from './lessonTickets-slice'

export const listenerMiddleware = createListenerMiddleware()

const store = configureStore({
  reducer: {
    lessonBookingUi: lessonBookingUiSlice.reducer,
    lessonTickets: lessonTicketsSlice.reducer
    // 여기에 다른 리듀서들을 추가
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  devTools: import.meta.env.MODE !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export default store
