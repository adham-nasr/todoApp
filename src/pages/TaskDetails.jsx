
import { useEffect, useState } from 'react'
import SiteLayout from '../components/SiteLayout'
import TaskCard from '../components/TaskCard'
import { useParams } from 'react-router-dom'
import './TaskDetails.css'

function TaskDetails() {

  const [data,setData] = useState(
        localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
    );

    const {id} = useParams()
    console.log("id = " , id)
    const task = data.filter((el)=> el.id === id)[0]
    console.log("task = " , task)
  return (
    <SiteLayout>
        <div className='cardContainer'>
            <TaskCard data={task} detailed={true} />
        </div>
    </SiteLayout>
  )
}

export default TaskDetails