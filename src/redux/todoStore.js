import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../redux/todoSlice'
export const todoStore = configureStore({
    reducer: {
        todos:todoReducer
    }
})

export default todoStore