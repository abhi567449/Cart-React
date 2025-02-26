import React from 'react'
import './../../App.css'
import icon from './shopping-cart.png'

function Header({CartValue}) {


  return (
    <div className='header'>
      <div >useReducer</div>
      <div>
        <img className='shopping-icon' src={icon} alt="" />
        <div className='total-items-cart'>
        <p>{CartValue}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
