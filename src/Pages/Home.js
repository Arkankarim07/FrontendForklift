import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
    {/* Fixed Sidebar */}
    <Sidebar isOpen={sidebarOpen} />
    
    {/* Main content with fixed navbar */}
    <div className="flex flex-1 flex-col">
      {/* Fixed Navbar */}
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      {/* Main content with appropriate margins */}
      <main className={`
        translate-y-16 flex-1 overflow-y-auto p-4 md:p-6 transition-all duration-300
        ${sidebarOpen ? 'ml-64' : ''}
      `}>
        <div className="max-w-7xl mx-auto">
          <div className="shadow rounded-lg p-6 h-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard Content</h2>
            <p className="text-gray-600">This is the main content area of your dashboard.</p>
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default Home
