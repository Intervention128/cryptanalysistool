import {configureStore} from '@reduxjs/toolkit'
import processors from './slices/processorsSlice'

const store = configureStore({
  reducer: {
    processors,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
