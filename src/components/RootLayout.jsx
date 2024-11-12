import React from 'react'
import SideNavBar from "./SideBarNav"
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='flex'>
    <SideNavBar />
    <main className="h-dvh px-5 overflow-auto w-full">
        <Outlet/>
    </main>
    
    
    </div>
  )
}

export default RootLayout