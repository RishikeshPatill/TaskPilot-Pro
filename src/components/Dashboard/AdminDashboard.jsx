import React from 'react'
import Header from '../Essentials/Header'
import CreateTask from '../TaskList/CreateTask'
import AllTaskList from '../TaskList/AllTaskList'

const AdminDashboard = (props) => {

  

  return (
    <div className='h-screen'>
      <Header changeUser={props.changeUser}/>
      <div class="h-20"></div>
      <CreateTask/>
    </div>
  )
}

export default AdminDashboard
