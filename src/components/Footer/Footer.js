import React, { useState } from 'react'
import './Footer.css'
import { useDispatch, useSelector } from 'react-redux'
import { filter } from '../../redux/actions';
// import { filtertodo } from '../../redux/actions';

const Footer = (props) => {
  const {setFilterState} = props;
  const dispatch = useDispatch();

  // const filterTodo = useSelector((state) => state.filter);

  const [status,setStatus] = useState('All')

  // const status = status

  // const filtered = useSelector((state) => state.filter)

  const todoListFilter = useSelector(e => e.todoList)

  // const todoListFilter = useSelector((state) => state.todoListFilter);

  const clickAll = () => {
    setFilterState('All')
    setStatus('All')
    
  }

  const clickActive = () => {
    // setStatus('Active')
    setFilterState('Active')
    // dispatch(filter('All'))
    setStatus('Active')
  }

  const clickCompleted = () => {
    // setStatus('Completed')
    setFilterState('Completed')
    setStatus('Completed')
    
  }
  // const [status, setStatus] = useState('All')

  return (
    <div className='Footer'>
        <div className='Footer_content'>
            <div className='Nav_footer'   >
                <button className={status === 'All' ? 'click_btn' : 'btn'} filtered='All'  onClick={clickAll} > All ({todoListFilter.length})</button>
                <button className={status === 'Active' ? 'click_btn' : 'btn'} filtered='Active' onClick={clickActive}>  Active ({todoListFilter.filter(todo => !todo.complete).length}) </button>
                <button className={status === 'Completed' ? 'click_btn' : 'btn'} filtered='Completed' onClick={clickCompleted} > Completed ({todoListFilter.filter(todo => todo.complete).length}) </button>
                {/* <button className='Clear_completed'> Clear completed</button> */}
            </div>
        </div>
    </div>
  )
}

export default Footer