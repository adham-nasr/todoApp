import React from 'react'
import Card from './Card'
import { useEffect, useState } from 'react'
import Button from './Button'
import './Tasks.css'

function Tasks() {

  function genId(){
        console.log("genId called")
        console.log(crypto.randomUUID())
        return crypto.randomUUID();
    }

    const initial_data = [
        {
            id:1,
            title:"Project",
            completed:false
        },
        {
            id:2,
            title:"lunch",
            completed:true,
        },
        {
            id:3,
            title:"table tennis",
            completed:false
        },
    ]

    const [data,setData] = useState(
        localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : initial_data
    );
    const [showAll,setShowAll] = useState(true);

    console.log(data)

    const changeHandler = (val)=>{
        console.log("val = " , val)
        setShowAll(val === "true" ? true : false);
    }

    function addTask(){
        const id = genId();
        setData([...data , {
            id:id,
            completed:false,
            title:"task " + id
        }])
        setShowAll(showAll)
    }

    const editHandler = (id,val)=>{
        setData(
            data.map((el)=>{
                if(el.id === id)
                    return {...el,completed:val};
                return el;
            })
        )
    }

    const deleteHandler = (id)=>{
        setData(
            data.filter((el)=> el.id !== id)
        )
    }

    useEffect(()=>{
        console.log("data changed = " , data);
        localStorage.setItem("tasks" , JSON.stringify(data));
    }, [data])

  return (
    <div className='container'>
        <div className='filters'>
            <label>filter</label>
            <select name='completed' onChange={(e)=>{changeHandler(e.target.value)}}>
                <option value={true}>All</option>
                <option value={false}>Completed</option>
            </select>
        </div>
        <div className='cards'>
            {
                data.filter((el)=> showAll || el.completed )
                .map((el) =>
                    <Card key={el.id} title={el.title} completed={el.completed} id={el.id} editHandler={editHandler} deleteHandler={deleteHandler}  />
                )
            }
        </div>
        <div className='buttDiv'>
            <Button title="Add" clickHandler={addTask} />
        </div>
    </div>
  )
}

export default Tasks