import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdForklift, MdDashboard, MdMenu } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={`
        fixed top-0 left-0 z-20 h-full
        w-64 bg-gradient-to-b from-black to-[#724c12] via-black/90 text-white
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
      <div className='flex border-b  border-gray-700 items-center justify-around h-16'>
        <h1 className='text-2xl font-bold'>
          Forklift<span className='text-yellow-500'>Zone</span>
        </h1>
        <button
          className="text-white hover:text-yellow-500 focus:outline-none md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <MdMenu className="h-6 w-6" />
        </button>
      </div>
      <nav className='flex flex-col flex-1 overflow-y-auto p-4'>
        <ul className='space-y-5'>
          <li>
            <Link to='/home' className={`flex text-xl items-center px-4 py-2 text-gray-300 hover:bg-yellow-600 transition-all rounded ${isActive('/home') ? 'bg-yellow-600 text-white' : ''}`}>
              <MdDashboard className='mr-2' />
              Home
            </Link>
          </li>
          {/* Add more menu items here */}
          <li>
            <Link to='/inventory' className={`flex text-xl items-center px-4 py-2 text-gray-300 hover:bg-yellow-600 transition-all rounded ${isActive('/inventory') ? 'bg-yellow-600 text-white' : ''}`}>
              <MdForklift className='mr-2' />
              Forklift
            </Link>
          </li>
          <li>
            <Link to='/orders' className={`flex text-xl items-center px-4 py-2 text-gray-300 hover:bg-yellow-600 transition-all rounded ${isActive('/orders') ? 'bg-yellow-600 text-white' : ''}`}>
              <FaUserEdit className='mr-2' />
              Manage User
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
