import React from 'react'
import { Link } from 'react-router-dom'
import { MdForklift, MdDashboard } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
function Sidebar({ isOpen }) {
    return (
      <div className={`
        fixed top-0 left-0 z-20 h-full
        w-64 bg-gradient-to-b from-black to-[#724c12] via-black/90 text-white
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className='flex border-b border-gray-700 items-center justify-center h-16'>
          <h1 className='text-2xl font-bold'>
            Forklift<span className='text-yellow-500'>Zone</span>
          </h1>
        </div>
        <nav className='flex flex-col flex-1 overflow-y-auto p-4'>
          <ul className='space-y-2'>
            <li>
              <Link to='/home' className='flex items-center px-4 py-2 text-gray-300 hover:bg-yellow-600 transition-all rounded'>
                <MdDashboard className='mr-2'/>
                Home
              </Link>
            </li>
            {/* Add more menu items here */}
            <li>
              <Link to='/inventory' className='flex items-center px-4 py-2 text-gray-300 hover:bg-yellow-600 transition-all rounded'>
              <MdForklift className='mr-2' />
                Forklift
              </Link>
            </li>
            <li>
              <Link to='/orders' className='flex items-center px-4 py-2 text-gray-300 hover:bg-yellow-600 transition-all rounded'>
                <FaUserEdit className='mr-2'/>
                Manage User
              </Link>
            </li>
           
          </ul>
        </nav>    
      </div>
    );
  }
  
  export default Sidebar;
