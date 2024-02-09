import { createSlice } from '@reduxjs/toolkit'
import { Tutor } from '../type/tutor'

const DUMMY_TUTORS: Tutor[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    university: 'University of California, Berkeley',
    major: 'English Literature',
    acceptanceRate: 93,
    tag: '#literature'
  },
  {
    id: '2',
    name: 'Bob Smith',
    university: 'University of Oxford',
    major: 'Philosophy',
    acceptanceRate: 88,
    tag: '#philosophy'
  },
  {
    id: '3',
    name: 'Catherine Ray',
    university: 'Massachusetts Institute of Technology',
    major: 'Computer Science',
    acceptanceRate: 95,
    tag: '#programming'
  },
  {
    id: '4',
    name: 'David Kim',
    university: 'Stanford University',
    major: 'Psychology',
    acceptanceRate: 90,
    tag: '#psychology'
  },
  {
    id: '5',
    name: 'Eva Green',
    university: 'Harvard University',
    major: 'Biology',
    acceptanceRate: 92,
    tag: '#biology'
  }
]

const initialState = {
  tutors: DUMMY_TUTORS
}

const tutorSlice = createSlice({
  name: 'tutor',
  initialState,
  reducers: {}
})

export const tutorActions = tutorSlice.actions
export default tutorSlice
