import React from 'react'
import './Button.css'

function Button({title , clickHandler,backColor}) {
  return (
    <button onClick={clickHandler} style={backColor?{backgroundColor:backColor }:{}} className='button' >{title}</button>
  )
}

export default Button