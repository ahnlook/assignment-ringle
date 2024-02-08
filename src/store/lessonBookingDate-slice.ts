import { createSlice } from '@reduxjs/toolkit'
import { endOfWeek, startOfWeek } from 'date-fns'
import { DateRange } from 'react-day-picker'

const today = new Date()
const defaultWeek: DateRange = {
  from: startOfWeek(today, { weekStartsOn: 0 }),
  to: endOfWeek(today, { weekStartsOn: 0 })
}

const lessonBookingDateSlice = createSlice({
  name: 'lessonBookingDate',
  initialState: {
    currentWeek: defaultWeek
  },
  reducers: {
    setWeek(state, action) {
      state.currentWeek = {
        from: startOfWeek(action.payload, { weekStartsOn: 0 }),
        to: endOfWeek(action.payload, { weekStartsOn: 0 })
      }
    }
  }
})

export const lessonBookingDateActions = lessonBookingDateSlice.actions
export default lessonBookingDateSlice
