import React from 'react'
import Header from '../Essentials/Header'
import AllTaskList from './AllTaskList'

const AllTask = () => {
  return (
    <div className='p-6 space-y-6 h-screen'>
      <Header/>
      <AllTaskList/>
    </div>
  )
}

export default AllTask
