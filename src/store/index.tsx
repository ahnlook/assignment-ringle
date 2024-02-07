import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'

import lessonBookingUiSlice from './lessonBookingUi-slice'

export const listenerMiddleware = createListenerMiddleware()

const store = configureStore({
  reducer: {
    // 여기에 다른 리듀서들을 추가
    lessonBookingUi: lessonBookingUiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  devTools: import.meta.env.MODE !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export default store
