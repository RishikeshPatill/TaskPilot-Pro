import React from 'react'
import Header from '../Essentials/Header'
import TaskCount from '../Essentials/TaskCount'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = (props) => {
  return (
    <div className='p-8 space-y-4 h-screen'>
       <Header changeUser={props.changeUser} data={props.data}/>
       <div class="h-10"></div>
       <TaskCount data={props.data}/>
       <h2 className='text-xl mb-6 underline text-black font-semibold'>All Pending Task</h2>
       <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
