import React from 'react'

const TaskCount = () => {
  return (

    <div className='mt-8 flex items-center justify-center gap-4'> 
      <div className='flex items-start flex-col justify-center gap-1 p-5 bg-white rounded-md shadow  w-full'>
      <h2 className='text-4xl font-semibold'>0</h2>
      <h3 className='text-xl font-semibold '>New</h3>
      </div>
      
      <div className='flex items-start flex-col justify-center gap-1 p-5 bg-white rounded-md shadow  w-full'>
      <h2 className='text-4xl font-semibold'>0</h2>
      <h3 className='text-xl font-semibold '>Accepted</h3>
      </div>

      <div className='flex items-start flex-col justify-center gap-1 p-5 bg-white rounded-md shadow  w-full'>
      <h2 className='text-4xl font-semibold'>0</h2>
      <h3 className='text-xl font-semibold '>Completed</h3>
      </div>

      <div className='flex items-start flex-col justify-center gap-1 p-5 bg-white rounded-md shadow  w-full'>
      <h2 className='text-4xl font-semibold'>0</h2>
      <h3 className='text-xl font-semibold '>Failed</h3>
      </div>
      
    </div>
    
    
  )
}

export default TaskCount
