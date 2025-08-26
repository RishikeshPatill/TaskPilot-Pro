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
         if(item.newTask){
          return <NewTask key={idx} data={item}/>
        }
        if(item.active){
          return <AcceptTask key={idx} data={item}/>
        }
        if(item.failed){
         return  <FailedTask key={idx} data={item}/>
        }
        if(item.completed){
         return <CompleteTask key={idx} data={item}/>
        }
      })
    }

    </div>
    
  )
}

export default TaskList
