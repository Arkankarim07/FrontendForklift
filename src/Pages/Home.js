import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { IoIosWarning } from "react-icons/io";
import { MdForklift } from "react-icons/md";
import Search from '../Components/Search';
import StatCard from '../Components/StatCard';
import Table from '../Components/Table';
import { LuBookDashed } from 'react-icons/lu';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        {/* Main content */}
        <main className={`
          translate-y-16 flex-1 overflow-y-auto p-3 md:p-6 transition-all duration-300
          ${sidebarOpen ? 'md:ml-64' : ''}
        `}>
          <div className="max-w-9xl mx-auto">
            <div className="flex flex-col gap-4 mb-4 sm:flex-row">
              <StatCard
                title="Total Abnormality"
                value="72"
                icon={IoIosWarning}
                gradientFrom="from-yellow-500"
                gradientTo="to-yellow-600"
              />
              <StatCard
                title="Total Forklift"
                value="6"
                icon={MdForklift}
                gradientFrom="from-blue-500"
                gradientTo="to-blue-600"
              />
            </div>

            <Table />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
