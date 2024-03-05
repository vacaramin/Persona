import { configureStore } from '@reduxjs/toolkit'
import darkmodeReducer from './globalStates/darkmode'

export default configureStore({
  reducer: {
    darkmode: darkmodeReducer,
  },
})