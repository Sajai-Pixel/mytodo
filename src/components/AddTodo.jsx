// AddTodo.js
import React, { useState } from 'react'
import { addTodo } from '../redux/todoSlice'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
    const dispatch = useDispatch()
    const [todoText, setTodoText] = useState('')

    const handleaddTodo = () => {
        dispatch(addTodo({ id: Date.now(), text: todoText, completed: false }))
        setTodoText('')
    }

    return (
        <div className="flex items-center w-full gap-4 p-4 bg-[#F3F3E0] shadow-lg rounded-lg max-w-lg mx-auto border border-[#133E87]">
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Add new todo"
                className="flex-grow p-2 bg-[#CBDCEB] text-[#133E87] border border-[#608BC1] rounded-lg focus:outline-none focus:border-[#133E87]"
            />
            <button
                className="px-4 py-2 bg-[#133E87] text-[#F3F3E0] rounded-lg hover:bg-[#608BC1] transition"
                onClick={handleaddTodo}
            >
                Add
            </button>
        </div>
    )
}

export default AddTodo
