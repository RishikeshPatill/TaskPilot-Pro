import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full p-4 space-y-1 w-[25%]  bg-white rounded-md shadow hover:shadow-xl'>
        <div className='flex items-center justify-between '>
            <h3 className='font-serif text-base bg-white shadow py-1 px-4 text-black rounded-md'>{data.category}</h3>
            <h3 className='font-serif text-base  text-black'>{data.deadline}</h3>
        </div>
        <h2 className='mt-2 text-xl font-serif text-black'>{data.title}</h2>
        <p className='text-xs font-serif '>{data.description}</p>
        <div className='flex gap-2 justify-center items-center w-full mt-10'>
            <button className='bg-red-400 rounded font-sans shadow-md mt-10 text-sm py-2  px-25  font-medium text-white'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
