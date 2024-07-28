import { configureStore } from '@reduxjs/toolkit'
import SearchValueSlice from "../Sliceses/SearchSlice.js";
export const store = configureStore({
    reducer: {
        value: SearchValueSlice
    },
})