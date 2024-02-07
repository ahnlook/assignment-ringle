import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'

export const listenerMiddleware = createListenerMiddleware()

const store = configureStore({
  reducer: {
    // 여기에 다른 리듀서들을 추가
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  devTools: import.meta.env.MODE !== 'production'
})

export default store
