import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getAllTasks } from '../Redux/taskReducer/action';
import {getAllTasks, getTaskSuccess, taskError, taskRequest} from "../Redux/taskReducer/action"
import axios from 'axios';
import ShowTask from './ShowTask';

const TaskList = () => {
    
  const {tasks} =useSelector((state)=>state.taskReducer)
  console.log(tasks)
    const store=useSelector((state)=>state.taskReducer);
    console.log(store)

    const dispatch=useDispatch();

    //  const getAllTasks = async () => {
    //   dispatch(taskRequest());
    
    //   try {
    //     const token = localStorage.getItem('mytoken');
    //     const response = await axios.get("http://localhost:8000/task/read", {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     console.log(response,"res")
    //     dispatch(getTaskSuccess(response.data));
    //   } catch (error) {
    //     dispatch(taskError(error?.response?.data));
    //   }
    // };

    useEffect(()=>{
        dispatch(getAllTasks)
    },[dispatch])


  return (
    <div className=' mt-20 '>
    <h1 className='font-bold text-xl'>Tasks</h1>
    {tasks?.map((elem)=>(
      <ShowTask key={elem._id} {...elem}/>
    ))}
      
    </div>
  )
}

export default TaskList
