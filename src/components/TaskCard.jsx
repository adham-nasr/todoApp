import React from 'react'
import Card from './Card';
import Button from './Button'
import CheckBox from './Checkbox';
import './TaskCard.css'
import { Link, NavLink } from 'react-router-dom';

function TaskCard({data,detailed, editHandler , deleteHandler}) {
    console.log("TaskCard rendered with data = " , data)
    const {title,completed,id,description,length} = data;

    console.log("Card rendered with title = " , title , " completed = " , completed , " id = " , id);
    const checkboxHandler = (val)=>{
      console.log("checkboxHandler of " + id + "called with val = " , val)
        editHandler(id,val);
    }

  return (
    <Card>
        <div className='cardContent'>
            <NavLink className="title" to={`/tasks/${id}`}>{title}</NavLink>
            {detailed && 
                <div className='taskDetails'>
                    <p>{description}</p>
                    <p>{length} hours</p>
                    <p>{completed ? "Completed" : "Not Completed"}</p>
                </div>
            }
            {!detailed && 
                <div className='controls'>
                    <CheckBox id={id} checked={completed} checkboxHandler={checkboxHandler} />
                    <Button title="Delete"  backColor={"red"} clickHandler={() => deleteHandler(id)} />
                </div>
            }
        </div>
    </Card>
  )
}

export default TaskCard