import React from 'react'

const CreateTask = () => {
  return (

    <div className='flex-col items-center '>
       <div className='flex items-end justify-between'>
          <h1 className='font-serif text-3xl font-medium'>Create Task</h1>
          <a className='font-serif' href="/allTask">View all task</a>
       </div>
       <div className='bg-white h-[90%] w-full p-5 space-y-4 shadow-md rounded flex-col'>
      <div className='space-y-2'>
        <h3 className='text-4xs text-black font-serif'>Task Title</h3>
        <input className='border placeholder:font-serif shadow-md px-2 py-2 w-full font-serif border-blue-400 rounded' type="text" placeholder='enter your title'/>
      </div>
      <div className='space-y-2'>
        <h3 className='text-4xs text-black font-serif'>Description</h3>
        <textarea className='border placeholder:font-serif shadow-md px-2 py-2 w-full font-serif border-blue-400 rounded' type="text" placeholder='enter description here' name="description" id="desc" cols='30' rows='10' ></textarea>
      </div>
      <div className='space-y-2'>
        <h3 className='text-4xs text-black font-serif'>Deadline</h3>
        <input className='border placeholder:font-serif shadow-md px-2 py-2 w-full font-serif border-blue-400 rounded' type="date" placeholder='enter your password'/>
      </div>
      <div className='space-y-2'>
        <h3 className='text-4xs text-black font-serif'>Assign To</h3>
        <input className='border placeholder:font-serif shadow-md px-2 py-2 w-full font-serif border-blue-400 rounded' type="text" placeholder='enter your password'/>
      </div>
      <button className='font-serif w-full rounded-md shadow-md mt-5 text-white px-8 py-2 bg-blue-500'>Create Task</button>
    </div>
    </div>

   
  )
}

export default CreateTask
