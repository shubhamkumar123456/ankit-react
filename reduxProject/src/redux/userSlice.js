import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',

  initialState: {
    arr:[10, 20, 30, 40],
    count:0
  },

  reducers: {
    increment: (state, action) => {
      state.count = state.count+1
    },
    decrement: state => {
      state.count -= 1
    },
    divide:(state, action)=>{
            state.count = state.count / 2
    },
    multiply:(state, action)=>{
        state.count = state.count * 2
    },
    resetData:(state, action)=>{
        state.count = 0
    }
  }
})

export const { increment, decrement, divide , multiply, resetData } = userSlice.actions

export default userSlice.reducer