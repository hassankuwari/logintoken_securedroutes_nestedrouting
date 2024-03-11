import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar3 from './Sidebar3';

const Taskmanager = () => {
  return (
    <div className='main-pl'>
      <div className='main-sidebar red'>
<Sidebar3/>
      </div>
      <div className='dashboard-part'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Taskmanager
