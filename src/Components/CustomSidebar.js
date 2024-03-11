import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomSidebar = () => {
  return (
    <div>
      <NavLink to="customprofile">Profile</NavLink>
      <NavLink to="customdashboard">Dashboard</NavLink>
      <NavLink to="taskmanager">TaskManager</NavLink>
    </div>
  )
}

export default CustomSidebar
