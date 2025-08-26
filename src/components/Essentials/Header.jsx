import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  const logOutUser = () => {
  const confirmLogout = window.confirm("Are you sure you want to log out?")
  if (confirmLogout) {
    localStorage.removeItem("loggedInUser") // safer than setting empty
    // window.location.reload()
    props.changeUser('')
  }
}



  return (
    <div className='flex items-end bg-[#F2F9EF] justify-between shadow-sm fixed w-full top-0 left-0  mb-1 pt-4 pb-4 pr-6 pl-6'>
      <h2 className='text-xl mb-1 text-black font-serif'>Hello <span className='text-xl font-serif text-black'>User</span> </h2>
      <button onClick={logOutUser} className='text font-medium bg-red-600 text-white px-8 py-1 pb-2  rounded  hover:bg-black'>Log Out</button>
    </div>
  )
}

export default Header
