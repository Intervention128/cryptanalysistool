import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import type {AvailableProcessors} from '../../processors/processors'
import type {QueueItem} from '../../types/ProcessorTypes'
import {useAppSelector} from '../hooks'

interface QueueState {
  queue: QueueItem[]
}

const initialState: QueueState = {
  queue: [],
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
  },
})

export const {mountProcessor, changePosition, deleteProcessor} = queueSlice.actions

export const useQueue = () => useAppSelector(state => state.queue.queue)

export default queueSlice.reducer
