import React from 'react'

function StatCard({ title, value, icon: Icon, gradientFrom, gradientTo }) {
    return (
      <div className={`overflow-hidden w-full sm:w-80 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg shadow-lg`}>
        <div className="p-4 sm:p-6 flex items-center justify-between">
          <div className="text-white">
            <h1 className="text-base sm:text-lg font-medium opacity-90">{title}</h1>
            <h1 className="text-2xl sm:text-3xl font-bold mt-1">{value}</h1>
          </div>
          <div className="bg-white/20 p-2 sm:p-3 rounded-full">
            <Icon className="text-3xl sm:text-4xl text-white" />
          </div>
        </div>
      </div>
    );
  }

export default StatCard
