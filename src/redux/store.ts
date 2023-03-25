import {configureStore} from '@reduxjs/toolkit'
import queue from './slices/queueSlice'
import cipherText from './slices/cipherTextSlice'

const store = configureStore({
  reducer: {
    cipherText,
    queue,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
