import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "myTodos",
    initialState: [],

    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            return state = state.filter((todo) => todo.id !== action.payload)
        },
        toggleComplete: (state, action) => {
            const todo = state.find(todo => todo.id == action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    }
})

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;