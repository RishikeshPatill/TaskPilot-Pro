import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CreateTask = () => {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [assignTo, setAssignTo] = useState('');

  const [newtask, setNewTask] = useState({});

  const submitHandler=(e)=>{
   e.preventDefault()

   let employeeFound = false;

   const newTaskObj = {active:true,newTask:true,completed:false,failed:false,title,category,deadline,description,assignTo}
   setNewTask(newTaskObj)
   const data= JSON.parse(localStorage.getItem('employees'))

   data.forEach(function(elem){
    if(assignTo == elem.firstname){
      elem.tasks.push(newTaskObj)
      employeeFound = true
    }
   })

   if(!employeeFound){
   alert('No such employee found!')
   return;
   } else {
     alert('Task created successfully!')
   }

   localStorage.setItem('employees', JSON.stringify(data))

     setTitle('')
     setAssignTo('')
     setCategory('')
     setDeadline('')
     setDescription('')
     
  }

  return (

    <div className='flex flex-col  pr-8 pl-8 pt-4 pb-4 w-[80%] mx-auto bg-[#F2F9EF] '>

       <div className='flex bg-[#3988ff] items-end justify-between p-5'>
          <h1 className='font-serif text-3xl font-medium'>Create Task</h1>
          <Link className='font-serif' to="/allTask">View all task</Link>
       </div>

         

       <form onSubmit={(e)=>{submitHandler(e)}}>
        <div className='w-full p-5 space-y-4 flex bg-white shadow-sm hover:shadow-xl mb-15 rounded flex-col'>

      <div className='space-y-2'>
        <h3 className='text-4xs text-black font-serif'>Task Title</h3>
        <input 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        className='border placeholder:font-serif px-2 py-2 w-full font-serif focus:outline-none focus:shadow-md  border-blue-400 rounded' type="text" placeholder='enter task title'/>
      </div>

      <div className='space-y-2'>
        <h3 className='text-4xs text-black font-serif'>Task Category</h3>
        <input 
        value={category}
        onChange={(e)=>{
          setCategory(e.target.value)
        }}
        className='border placeholder:font-serif px-2 py-2 w-full font-serif focus:outline-none focus:shadow-md  border-blue-400 rounded' type="text" placeholder='enter tiltle category'/>
      </div>

      <div className='space-y-2'>
        <h3 className='text-4xs text-black font-serif'>Description</h3>
        <textarea 
        value={description}
        onChange={(e)=>{
          setDescription(e.target.value)
        }}
        className='border placeholder:font-serif  px-2 py-2 w-full font-serif focus:outline-none focus:shadow-md border-blue-400 rounded' type="text" placeholder='enter task description' name="description" id="desc" cols='30' rows='10' ></textarea>
      </div>

      <div className='space-y-2'>
        <h3 className='text-4xs text-black font-serif'>Deadline</h3>
        <input 
         value={deadline}
        onChange={(e)=>{
          setDeadline(e.target.value)
        }}
        className='border placeholder:font-serif  px-2 py-2 w-full font-serif focus:outline-none focus:shadow-md border-blue-400 rounded' type="date" placeholder='enter task deadline'/>
      </div>

      <div className='space-y-2'>
        <h3 className='text-4xs text-black font-serif'>Assign To</h3>
        <input 
         value={assignTo}
        onChange={(e)=>{
          setAssignTo(e.target.value)
        }}
        className='border placeholder:font-serif  px-2 py-2 w-full font-serif focus:outline-none focus:shadow-md border-blue-400 rounded' type="text" placeholder='enter task assignee name'/>
      </div>

      <button className='font-serif w-full rounded-md shadow-md mt-5 hover:bg-black text-white px-8 py-2 bg-blue-500 '>Create Task</button>
    
        </div>
       </form>
       
    </div>

   
  )
}

export default CreateTask
