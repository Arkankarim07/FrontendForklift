import React from 'react';
import Search from './Search';

const Table = () => {
    const data = [
        { timestamp: "2024-01-20 08:30:15", id: "FL-001", zone: "Zone A", type: "Double Forklift" },
        { timestamp: "2024-01-20 09:15:22", id: "FL-002", zone: "Zone B", type: "Double Forklift" },
        { timestamp: "2024-01-20 10:05:33", id: "FL-003", zone: "Zone C", type: "Double Forklift" },
        { timestamp: "2024-01-20 11:20:45", id: "FL-004", zone: "Zone A", type: "Human & Forklift" },
        { timestamp: "2024-01-20 12:45:18", id: "FL-005", zone: "Zone D", type: "Human & Forklift" }
    ];

    return (
        <div className="w-full p-4 sm:p-6 bg-white rounded-lg shadow-lg">
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0'>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Data Monitoring Forklift</h2>
                <Search width={"w-full sm:w-64"} />
            </div>
            <div className="w-full overflow-x-auto rounded-lg border border-gray-200 mt-4">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-600 text-white">
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold">Timestamp</th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold">Forklift ID</th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold">Zone</th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-blue-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            >
                                <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base border-t border-gray-200">{row.timestamp}</td>
                                <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base border-t border-gray-200 font-medium">{row.id}</td>
                                <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base border-t border-gray-200">
                                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                                        row.zone === "Zone A" ? "bg-green-100 text-green-800" :
                                        row.zone === "Zone B" ? "bg-blue-100 text-blue-800" :
                                        row.zone === "Zone C" ? "bg-purple-100 text-purple-800" :
                                        "bg-yellow-100 text-yellow-800"
                                    }`}>
                                        {row.zone}
                                    </span>
                                </td>
                                <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base border-t border-gray-200">
                                    <div className="flex items-center">
                                        <div className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full mr-2 ${
                                            row.type === "Double Forklift" ? "bg-blue-500" : "bg-orange-500"
                                        }`}></div>
                                        {row.type}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-4 text-xs sm:text-sm text-gray-500 gap-2 sm:gap-0">
                <div>Menampilkan 5 dari 5 data</div>
                <div>Terakhir diperbarui: 20 Januari 2024</div>
            </div>
        </div>
    );
};

export default Table;