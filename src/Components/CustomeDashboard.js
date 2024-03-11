import React from 'react'
import { Outlet } from 'react-router-dom'
import SIidebar2 from './SIidebar2'

const CustomeDashboard = () => {
  return (
    <div className='main-pl'>
      <div className='main-sidebar red'>
        < SIidebar2/>
      </div>
      <div className='dashboard-part'>
        <Outlet/>
      </div>
    </div>
  )
}

export default CustomeDashboard
