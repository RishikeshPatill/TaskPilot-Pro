import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h2 className='text-xl mb-1 text-black font-serif'>Hello <span className='text-xl font-serif text-black'>Sarthak</span> </h2>
      <button className='text font-medium bg-red-600 text-white px-4 py-1 pb-2 rounded'>Log Out</button>
    </div>
  )
}

export default Header
