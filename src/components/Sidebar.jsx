import React from 'react'
import logo from '/assets/images/logo.png'

const Sidebar = () => {
  return (
    <nav className='pt-[20px] flex fixed justify-center h-screen w-[68px] bg-[#1A0931]'>
      <div>
        <img src={logo} alt='Logo' className='w-[28px]'/>
      </div>
    </nav>
  )
}

export default Sidebar
