import React from 'react'
import Header from '../Essentials/Header'
import TaskCount from '../Essentials/TaskCount'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-6 space-y-6 h-screen'>
       <Header data={data}/>
       <TaskCount data={data}/>
       <h2 className='text-xl mb-6 underline text-black font-semibold'>All Pending Task</h2>
       <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
