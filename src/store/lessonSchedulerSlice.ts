import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { endOfWeek, startOfWeek } from 'date-fns'

import { DateString } from '../type/shared'

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
    setCurrentWeek(state, action: PayloadAction<DateString>) {
      state.currentWeek = weekRange(new Date(action.payload))
    }
  }
})

export const lessonSchedulerActions = lessonSchedulerSlice.actions
export default lessonSchedulerSlice
