import React from 'react'
import { useState } from 'react';
import { FaBars, FaTachometerAlt, FaUsers, FaFolder, FaCalendarAlt, FaFileAlt, FaChartLine } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const SideBarNav = () => {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='sticky left-0 top-0'>
    
    <div className="flex h-screen">
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-4 focus:outline-none text-white bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-10 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 transition-transform duration-200 ease-in-out lg:flex lg:flex-col w-64 bg-gray-800 text-white`}>
        
        {/* Logo Section */}
        <div className="flex items-center justify-center mt-8 mb-8">
          <img src="/svgs/law.svg" alt="logo" className="h-10 w-10 rounded-full" /><span className="text-xl font-semibold">GemSolicitors</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          <NavLink to="/" className="flex items-center px-6 py-2 hover:bg-gray-700">
            <FaTachometerAlt className="mr-3" /> Dashboard
          </NavLink>
          <NavLink to="/team" className="flex items-center px-6 py-2 hover:bg-gray-700">
            <FaUsers className="mr-3" /> Team
          </NavLink>
          <NavLink to="/projects" className="flex items-center px-6 py-2 hover:bg-gray-700">
            <FaFolder className="mr-3" /> Projects
          </NavLink>
          <NavLink to="/documents" className="flex items-center px-6 py-2 hover:bg-gray-700">
            <FaFileAlt className="mr-3" /> Documents
          </NavLink>
          <NavLink to="/reports" className="flex items-center px-6 py-2 hover:bg-gray-700">
            <FaChartLine className="mr-3" /> Reports
          </NavLink>
        </nav>
      </div>
      </div>
      </div>

     
    
  )
}

export default SideBarNav