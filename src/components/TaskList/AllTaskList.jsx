import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Link } from 'react-router-dom'

const AllTaskList = () => {
  const authData = useContext(AuthContext)

  return (
    <div className='flex flex-col bg-[#F2F9EF] items-start space-y-6 pr-10 pl-10 pb-10'>
      <h1 className='font-serif text-2xl font-medium mt-4'>All Tasks</h1>

      {authData.employees.map((employee) =>
        employee.tasks.map((item) => (
          <div
            key={item.title}
            className='bg-white h-[90%] w-full p-6 shadow-sm hover:shadow-xl transition-shadow rounded-md flex flex-col'
          >
            
            <div className='grid grid-cols-5 items-center text-sm font-serif gap-4'>
              <div className='flex items-center space-x-2'>
                <input className='size-4 border-none' type='checkbox' />
                <h3 className='text-blue-500'>{item.title}</h3>
              </div>
              <h3>Category - <span>{item.category}</span></h3>
              <h3>Deadline - <span>{item.deadline}</span></h3>
              <h3>Status - <span>{item.active ? "Active" : "Completed"}</span></h3>
              <h3>Assigned to - <span>{employee.firstname}</span></h3>
            </div>
          </div>
        ))
      )}

      <Link to="/adminDashboard">
  <button className="font-serif w-full rounded-md shadow-md mt-5 text-white px-8 py-2 hover:bg-black bg-blue-500">
    Close
  </button>
</Link>
    </div>
  )
}

export default AllTaskList

