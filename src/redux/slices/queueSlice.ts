import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import type {AvailableProcessors} from '../../processors/processors'
import type {QueueItem} from '../../types/ProcessorTypes'
import {useAppSelector} from '../hooks'
import {updateResultAndContinue} from './cipherTextSlice'

interface QueueState {
  queue: QueueItem[]
  currentRunner: string | null
}

const initialState: QueueState = {
  queue: [],
  currentRunner: null,
}

export const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    mountProcessor: (state, action: PayloadAction<keyof AvailableProcessors>) => {
      state.queue.push({
        processorId: action.payload,
        mountedId: `${action.payload}-${state.queue.length}`,
      })
    },
    changePosition: (state, action: PayloadAction<{from: number; to: number}>) => {
      const {from, to} = action.payload
      const processor = state.queue[from]
      state.queue.splice(from, 1)
      state.queue.splice(to, 0, processor)
    },
    deleteProcessor: (state, action: PayloadAction<string>) => {
      state.queue = state.queue.filter(item => item.mountedId !== action.payload)
    },
    runQueue: (state) => {
      if (state.queue.length === 0) return
      state.currentRunner = state.queue[0].mountedId
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateResultAndContinue, (state) => {
      if (state.currentRunner === null) return
      const currentRunnerIndex = state.queue.findIndex(item => item.mountedId === state.currentRunner)
      if (currentRunnerIndex === state.queue.length - 1) state.currentRunner = null
      else state.currentRunner = state.queue[currentRunnerIndex + 1].mountedId
    })
  },
})

export const {mountProcessor, changePosition, deleteProcessor, runQueue} = queueSlice.actions

export const useQueue = () => useAppSelector(state => state.queue.queue)
export const useCurrentRunner = () => useAppSelector(state => state.queue.currentRunner)

export default queueSlice.reducer
