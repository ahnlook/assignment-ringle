import { createSlice } from '@reduxjs/toolkit'
import { endOfWeek, startOfWeek } from 'date-fns'

const weekRange = (day: Date) => ({
  from: startOfWeek(day, { weekStartsOn: 0 }).toString(),
  to: endOfWeek(day, { weekStartsOn: 0 }).toString()
})

const initialState = {
  currentWeek: weekRange(new Date())
}

const lessonSchedulerSlice = createSlice({
  name: 'lessonScheduler',
  initialState,
  reducers: {
    setCurrentWeek(state, action) {
      state.currentWeek = weekRange(action.payload)
    }
  }
})

export const lessonSchedulerActions = lessonSchedulerSlice.actions
export default lessonSchedulerSlice
