import React from 'react'
import todoReducrer from '../store/reducers/todoReducrer'
import Todos from './Todos'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import todoReducrer from '../store/reducers/todoReducrer'

const Navbar = ({ todos }) => {
  const length = todos.length
  return (
    <div className='navbar'>
        <h1>my Redux todo apps</h1>
        <ul>
            <li>home</li>
            <li>about</li>
            <li>Total todos: {length} </li>
        </ul>
    </div>
  )
}

Navbar.prototype = {
  todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  todos: state.myTodos.todos 
})

export default connect(mapStateToProps, {}) (Navbar)


