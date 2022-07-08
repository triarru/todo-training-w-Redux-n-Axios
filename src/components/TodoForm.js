import React, {useState} from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux/es/exports";
import { useDispatch, useSelector } from "react-redux";
import {v4 as uuidv4} from 'uuid'
import Todos from './Todos';
import { addTodo } from '../store/action/todoAction';


const TodoForm = ({addTodo}) => {
  // const dispatch = useDispatch(); 
  // const todos = useSelector(state => state.myTodos.todos)
  // const submit = () => {
  //   dispatch();
  // };

  const [title, setTitle] = useState('')

  const onTitleChange = event => {
    setTitle(event.target.value)
  }

  const onFromSubmit = event => {
    event.preventDefault()

    if (title !== ' ') {
      const newTodo = {
        id : uuidv4(),
        title,
        completed : false
      }

      // console.log(newTodo)
      addTodo(newTodo)
      setTitle('  ')
    }
  }
  return (
    <div>         
      <form onSubmit={onFromSubmit}>
        <input type='text' name='title' onChange={onTitleChange} value={title}/>
        <input type='submit' value= 'Add'  />
      </form> 
      
    </div>
  )
}

TodoForm.propTypes = {
  addTodo : PropTypes.func.isRequired
}

const mapStateToProps = e => ({})

export default connect(mapStateToProps, {addTodo}) (TodoForm)
