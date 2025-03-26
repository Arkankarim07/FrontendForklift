import React from 'react'
import { MdMenu, MdLogout } from 'react-icons/md'

function Navbar({ toggleSidebar, sidebarOpen }) {
    return (
        <header className={`
        bg-white shadow fixed top-0 right-0 left-0 z-10 transition-all duration-300
        ${sidebarOpen ? 'md:left-64' : 'left-0'}
      `}>
            <div className="flex items-center justify-between h-16 px-4 md:px-6">
                {/* Sidebar toggle button - only visible on mobile */}
                <button
                    className="text-gray-600 hover:text-gray-900 focus:outline-none "
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                >
                    <MdMenu className="h-6 w-6" />
                </button>


                {/* Right navigation */}
                <div className="flex items-center space-x-4">
                    {/* Logout button */}
                    <button className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none">
                        <MdLogout className="h-5 w-5 mr-1" />
                        <span className="hidden md:inline">Logout</span>
                    </button>

                    {/* User Profile */}
                    <div className="relative">
                        <button className="flex items-center focus:outline-none">
                            <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                                <span>U</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;