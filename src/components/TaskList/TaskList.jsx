import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (

    <div id='tasklist' className='h-[50%] overflow-x-auto pl-2 pr-2 pb-5 flex items-stretch justify-start flex-nowrap gap-5 w-full'>

    {
      data.tasks.map((item , idx)=>{
        if(item.accept){
          return <AcceptTask key={idx}/>
        }
        if(item.failed){
         return  <FailedTask key={idx}/>
        }
        if(item.completed){
         return <CompleteTask key={idx}/>
        }
        if(item.newtask){
          return <NewTask key={idx}/>
        }
      })
    }

    </div>
    
  )
}

export default TaskList
