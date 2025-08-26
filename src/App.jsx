import React, { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AllTask from './components/TaskList/AllTask'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import CreateTask from './components/TaskList/CreateTask'


const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData=useContext(AuthContext)
  
  useEffect(() => {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData=JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    
  }, []);

  const handleLogin = (email, password)=>{
    if(email== 'admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee=authData.employees.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
         localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    }else{
      alert("invalid Credentials")
    }
  }

  
  // handleLogin('user@me.com','123')


  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },)
return (
  <Routes>
    <Route
      path="/"
      element={
        <>
          {!user ? <Login handleLogin={handleLogin} /> : ''}
          {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : ''}
          {user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : ''}
        </>
      }
    />
    <Route path="/allTask" element={<AllTask />} />
    <Route path="/adminDashboard" element={<AdminDashboard />} />
  </Routes>
)

}

export default App