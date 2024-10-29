// ShowTodo.js
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleComplete } from '../redux/todoSlice'

const ShowTodo = () => {
    const allTodos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id))
    }

    return (
        <>
        {allTodos.map((todo, index) => (
          <div
            key={index}
            className={`flex items-center w-full justify-between p-4 rounded-lg shadow-md max-w-lg mx-auto mt-4 border transition-all duration-200 ease-in-out ${
              todo.completed ? 'bg-[#7AB2D3] border-[#608BC1] text-[#F3F3E0]' : 'bg-[#CBDCEB] border-[#608BC1] text-[#133E87]'
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
                className="h-5 w-5 text-[#133E87] border-[#608BC1] rounded focus:ring-[#133E87]"
              />
              <span
                className={`text-lg transition-colors duration-200 ${
                  todo.completed ? 'line-through opacity-80' : ''
                }`}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-red-500 hover:text-red-600 transition-colors duration-150 ease-in"
              aria-label="Delete Todo"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </>
    )
}

export default ShowTodo
