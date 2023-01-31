import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './Slices/userSlice'

export const Store = configureStore({
    reducer: {
        user: UserReducer
    }
})