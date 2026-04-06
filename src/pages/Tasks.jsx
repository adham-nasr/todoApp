import React from 'react'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import './Tasks.css'
import SiteLayout from '../components/SiteLayout'
import TaskCard from '../components/TaskCard'

function Tasks() {

  function genId(){
        console.log("genId called")
        console.log(crypto.randomUUID())
        return crypto.randomUUID().replaceAll("-","");
    }

    const initial_data = [
        {
            id:"1",
            title:"Project",
            completed:false,
            description:"A project about todo app",
            length: 5
        },
        {
            id:"2",
            title:"lunch",
            completed:true,
            description:"lunch with friends",
            length: 2
        },
        {
            id:"3",
            title:"table tennis",
            completed:false,
            description:"play table tennis with friends",
            length: 3
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
            title:"task " + id,
            description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            length: Math.floor(Math.random() * 10) + 1,
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
    <SiteLayout>
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
                        <TaskCard key={el.id} data={el} detailed={false} editHandler={editHandler} deleteHandler={deleteHandler}  />
                    )
                }
            </div>
            <div className='buttDiv'>
                <Button title="Add" clickHandler={addTask} />
            </div>
        </div>
    </SiteLayout>
  )
}

export default Tasks