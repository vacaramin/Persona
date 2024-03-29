import { createSlice } from '@reduxjs/toolkit'

export const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState: {
    value: true,
  },
  reducers: {
    toggle: (state) => {
      console.log("Dark Mode initial = " + state.value)
    
      state.value = !state.value
      console.log("Dark Mode after toggle = " + state.value)
    
    },  
  },
})

export const { toggle} = darkmodeSlice.actions

export default darkmodeSlice.reducer 