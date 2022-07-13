import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from '../Input/Input'
import './Todo.css'
import { markCompleted, deleteTodo, getTodo, editedTodo, addTodo } from '../../store/actions/TodoActions'
import check from '../../img/check.png'
// import done from '../../img/done.png'
import deleted from '../../img/delete.png'
import circle from '../../img/circle.png'
// import down from '../../img/down.png'
import {v4 as uuidv4} from 'uuid'
// import { addTodo } from '../../store/actions/TodoActions'



const Todo = ({newTodos,getTodo, markCompleted, deleteTodo, editedTodo, addTodo}) => {
    //get todo
    useEffect(()=>{
        getTodo()
    },[])

    const [newTitle, setNewTitle] = useState('')

    const editite =  event => {
        setNewTitle(event.target.value)
    }

    console.log(newTitle)

    const newItem =  event => {
        event.preventDefault()
        console.log(event)
    
        if(newTitle !== ' ') {
          const newtodo = {
            id: uuidv4(),
            title: newTitle,
            completed: false,
            edit: false,
            status: 'ALL'
          }
    
          console.log(newtodo.title)
          addTodo(newtodo)
          setNewTitle('')
        }
    
      }



  return (
    <div className='Todo'>
        <Input />
        {
            newTodos.map(item => 
                <div className='Todos' key={item.id}>
                    <div className='Todos_content'>
                    <img className='img_check'  onClick={markCompleted.bind(this,item.id)} src = {item.completed? check : circle } alt = '' width='25px'/>
                    {/* // <input type='checkbox'  onChange={markCompleted.bind(this,item.id)}/> */}
                    {item.edit? 
                    (<form onSubmit = {newItem}>
                        <input onChange={editite} />
                    </form>)
                    :
                    <p onDoubleClick={editedTodo.bind(this,item.id)} className={item.completed?'completed' : ''}>{item.title}</p>}
                    </div>
                    <img className='delete' onClick={deleteTodo.bind(this,item.id)} src = {deleted} width = '25px' alt=''/>
                    {/* <button className='delete' onClick={deleteTodo.bind(this,item.id)}>x</button> */}
                </div>
            )
        }
    </div>
  )
}

Todo.propTypes = {
    newTodos: PropTypes.any.isRequired,
    markCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    getTodo: PropTypes.func.isRequired,
    editedTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    newTodos: state.Mytodos.todos
})



export default connect(mapStateToProps, {getTodo,markCompleted, deleteTodo, editedTodo, addTodo }) (Todo)