import React from 'react'
import { MdMenu, MdLogout } from 'react-icons/md'

function Navbar({ toggleSidebar, sidebarOpen }) {
    return (
        <header className={`
        bg-white shadow fixed top-0 right-0 z-10 transition-all duration-300
        ${sidebarOpen ? 'left-64' : 'left-0'}
      `}>
            <div className="flex items-center justify-between h-16 px-4 md:px-6">
                {/* Sidebar toggle button */}
                <button
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                >
                    <MdMenu className="h-6 w-6" />
                </button>

                {/* Logo - only show on mobile */}
                <div className="md:hidden flex items-center">
                    <span className="text-xl font-semibold text-gray-800">ForkliftZone</span>
                </div>

                {/* Right navigation */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar 
                    <div className="hidden md:flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
*/}
                    {/* Notifications 
                    <button className="text-gray-600 hover:text-gray-800 focus:outline-none relative">
                        <MdNotifications className="h-6 w-6" />
                        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                    </button>
                    */}

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