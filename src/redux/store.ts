import {configureStore} from '@reduxjs/toolkit'
import queue from './slices/queueSlice'

const store = configureStore({
  reducer: {
    queue,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
