// App.js
import React from 'react'
import AddTodo from './components/AddTodo'
import ShowTodo from './components/ShowTodo'

function App() {
  return (
    <div className='h-screen flex flex-col bg-gradient-to-b from-[#CBDCEB] to-[#7AB2D3] justify-center items-center text-gray-800'>
      <p className='text-3xl font-bold text-[#133E87]'>MY TODO MANAGER</p>
      <div className='bg-[#F3F3E0] px-6 p-8 rounded-lg shadow-lg mt-4 border border-[#133E87]'>
        <AddTodo />
        <ShowTodo />
      </div>
    </div>
  )
}

export default App
