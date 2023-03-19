import {createSlice} from '@reduxjs/toolkit'
import type {Processor} from '../../types/ProcessorTypes'
import {useAppSelector} from '../hooks'

interface ProcessorsState {
  processors: Processor[]
}

const initialState: ProcessorsState = {
  processors: [],
}

export const processorsSlice = createSlice({
  name: 'processors',
  initialState,
  reducers: {
    mountProcessor: (state, action) => {
      state.processors.push(action.payload)
    },
    changePosition: (state, action) => {
      const {from, to} = action.payload
      const processor = state.processors[from]
      state.processors.splice(from, 1)
      state.processors.splice(to, 0, processor)
    },
    mountRunner: (state, action) => {
      const {mountedId, runner} = action.payload
      const processor = state.processors.find(processor => processor.mountedId === mountedId)
      if (processor) processor.run = runner
    },
  },
})

export const {mountProcessor, changePosition, mountRunner} = processorsSlice.actions

export const useProcessors = () => useAppSelector(state => state.processors.processors)
export const useQueue = () => useAppSelector(state => state.processors.processors).map(processor => processor.run)

export default processorsSlice.reducer
