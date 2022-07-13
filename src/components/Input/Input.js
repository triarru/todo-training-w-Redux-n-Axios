import React, { useState } from 'react'
import './Input.css'
import {v4 as uuidv4} from 'uuid'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/TodoActions'


const Input = ({addTodo}) => {
  const [title, setTitle] = useState('')

  const onTitleChange = event => {
    setTitle(event.target.value)
  }

  const Submit =  event => {
    event.preventDefault()

    if(title !== ' ') {
      const newtodo = {
        id: uuidv4(),
        title,
        completed: false,
        edit: false,
        status: 'ALL'
      }

      console.log(newtodo.title)
      addTodo(newtodo)
      setTitle('')
    }

  }
  return (
    <div className='Input'>
        <form onSubmit={Submit}>
            <input type = 'text' placeholder='Todo Something....'  name='title' onChange={onTitleChange} value={title} />
        </form>
    </div>
  )
}

Input.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({})



export default connect(mapStateToProps, {addTodo}) (Input)