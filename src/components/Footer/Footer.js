import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Footer.css'

const Footer = ({newTodos}) => {
  return (
    <div className='Footer'>
        <div className='Total'>{`${newTodos.length} item`}</div>
        <div className='Filter'>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
        <div className='deleteAll'>Clear All</div>
    </div>
  )
}

Footer.propTypes = {
    newTodos: PropTypes.any.isRequired
}

const mapStateToProps = state => ({
    newTodos: state.Mytodos.todos
})



export default connect(mapStateToProps, {}) (Footer)