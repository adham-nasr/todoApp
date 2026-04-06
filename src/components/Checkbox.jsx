import React, { useState } from 'react'
import './CheckBox.css'
function Checkbox({ id,checked, checkboxHandler }) {

    const [isChecked, setIsChecked] = useState(checked);

    const clickHandler = () => {
        console.log("CHange happend)");
        checkboxHandler(!isChecked);
        setIsChecked(!isChecked);
    }
    console.log("--------")
    console.log("Checkbox " + id + " rendered with checked = " , checked)
    console.log("checkbox " + id + " rendered with checked = " , isChecked)
  return (
    <div className='checkBox'>
        <label>Completed</label>
        <input type='checkbox' checked={isChecked} onChange={clickHandler}/>
    </div>
  )
}

export default Checkbox