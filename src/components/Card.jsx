import React from 'react'
import './Card.css'
import Button from './Button'
import CheckBox from './Checkbox';
function Card({title,completed,id,editHandler , deleteHandler}) {
    
  console.log("Card rendered with title = " , title , " completed = " , completed , " id = " , id);
    const checkboxHandler = (val)=>{
      console.log("checkboxHandler of " + id + "called with val = " , val)
        editHandler(id,val);
    }

  return (
    <div className='card'>
        <h2 className="title">{title}</h2>
        <div>
          <CheckBox id={id} checked={completed} checkboxHandler={checkboxHandler} />
          <Button title="Delete"  backColor={"red"} clickHandler={() => deleteHandler(id)} />
        </div>
    </div>
  )
}

export default Card