import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Footer.css';
// import { filtertodo } from '../../redux/actions';

const Footer = (props) => {
  const {setFilterState} = props;
  const [status,setStatus] = useState('All')
  const todoListFilter = useSelector(e => e.todos)

  const clickAll = () => {
    setFilterState('All')
    setStatus('All')
    
  }

  const clickActive = () => {
    setFilterState('Active')
    setStatus('Active')
  }

  const clickCompleted = () => {
    setFilterState('Completed')
    setStatus('Completed')
    
  }

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