import {createSlice} from '@reduxjs/toolkit'
import {useAppSelector} from '../hooks'
import {runQueue} from './queueSlice'

interface CipherTextState {
  cipherText: string
  intermediary: string[]
}

const initialState: CipherTextState = {
  cipherText: '',
  intermediary: [],
}

export const cipherTextSlice = createSlice({
  name: 'cipherText',
  initialState,
  reducers: {
    updateCipherText: (state, action) => {
      state.cipherText = action.payload
      state.intermediary = [action.payload]
    },
    updateResult: (state, action) => {
      state.intermediary.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(runQueue, (state) => {
      state.intermediary = [state.cipherText]
    })
  },
})

export const {updateCipherText, updateResult} = cipherTextSlice.actions

export const useCipherText = () => useAppSelector(state => state.cipherText.cipherText)
export const useResult = () => useAppSelector(state => state.cipherText.intermediary[state.cipherText.intermediary.length - 1])

export default cipherTextSlice.reducer
