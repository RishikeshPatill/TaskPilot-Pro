import React from 'react'

const TaskCount = ({data}) => {
  return (

    <div className='mt-8 flex items-center justify-center gap-4'> 
      <div className='flex items-start flex-col justify-center gap-1 p-5 bg-[#F2F9EF] rounded-md shadow  w-full'>
      <h2 className='text-4xl font-semibold'>{data.taskNumbers.newTask}</h2>
      <h3 className='text-xl font-semibold '>New Task</h3>
      </div>
      
      <div className='flex items-start flex-col justify-center gap-1 p-5 bg-[#F2F9EF] rounded-md shadow  w-full'>
      <h2 className='text-4xl font-semibold'>{data.taskNumbers.active}</h2>
      <h3 className='text-xl font-semibold '>Accepted Task</h3>
      </div>

      <div className='flex items-start flex-col justify-center gap-1 p-5 bg-[#F2F9EF] rounded-md shadow  w-full'>
      <h2 className='text-4xl font-semibold'>{data.taskNumbers.completed}</h2>
      <h3 className='text-xl font-semibold '>Completed Task</h3>
      </div>

      <div className='flex items-start flex-col justify-center gap-1 p-5 bg-[#F2F9EF] rounded-md shadow  w-full'>
      <h2 className='text-4xl font-semibold'>{data.taskNumbers.failed}</h2>
      <h3 className='text-xl font-semibold '>Failed Task</h3>
      </div>
      
    </div>
    
    
  )
}

export default TaskCount
