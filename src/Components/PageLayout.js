import React from 'react'
import CustomSidebar from './CustomSidebar'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
    return (
        <div className='main-pl'>
            <div className='main-sidebar'>
                <CustomSidebar />
                
            </div>
            
            
            <div className='dashboard-part'>
               <Outlet></Outlet>
            </div>
        </div>
    )
}

export default PageLayout
