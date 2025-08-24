import React from 'react'
import Header from '../Essentials/Header'
import CreateTask from '../TaskList/CreateTask'

const AdminDashboard = () => {
  return (
    <div className='p-6 space-y-6 h-screen'>
      <Header/>
      <CreateTask/>
    </div>
  )
}

export default AdminDashboard
