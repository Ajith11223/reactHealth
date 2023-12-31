import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  step: 1,
  user:{},
  tokenRudex:""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setUser:(state,action)=>{
      state.user =action.payload
    },
    setToken:(state,action)=>{
        console.log(action)
      state.tokenRudex =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,setStep,setUser ,setToken} = counterSlice.actions

export default counterSlice.reducer