import { configureStore } from '@reduxjs/toolkit'
import LoginAuthenticationSlice from './feature/LoginAuthenticationSlice'

export  const store = configureStore({
  reducer: {
    user:LoginAuthenticationSlice
  },
})