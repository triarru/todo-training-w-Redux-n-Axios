import React, { useState } from 'react'
import TodoInputs from '../Todos/todoInputs/TodoInputs'
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)

     const clickNewItem = () => {
        setOpen(true)
        // console.log(open)
     }

  return (
    <div className='Header'>
        {
            (open === true)?
            (<div>
                <div className='overlay'></div>
                <TodoInputs  close={setOpen}/>
                <div className='Header_Content'>
                <h1 className='title'>Todolist</h1>
                <button className='btnAddTodo'  onClick={clickNewItem}>  Add</button>
                </div>
            </div>):
            (
                <div className='Header_Content'>
                <h1 className='title'>Todolist</h1>
                <button className='btnAddTodo'  onClick={clickNewItem}>Add</button>
                </div>
            )
        }
       
       
    </div>
  )
}

export default Header