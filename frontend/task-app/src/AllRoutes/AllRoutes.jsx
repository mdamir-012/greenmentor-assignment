import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import TaskList from '../Components/TaskList'
import AddTask from '../Components/AddTask'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/tasklist' element={<TaskList/>}/>
        <Route path='/addTask' element={<AddTask/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
