import React from 'react'
import { Link } from 'react-router-dom'
import forklift from '../assets/forklift.png'
function Login() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-black/41 to-[#724c12]'>
        <div className='flex flex-col relative items-center justify-center bg-white p-8 rounded-lg shadow-lg w-96'>
            <h1 className='text-4xl font-bold mb-8 self-start text-gray-800'>Login</h1>
            <img src={forklift} alt="forklift" className=' w-56 h-56  absolute -top-32 -right-7 transform scale-x-[-1]' />
            <input 
                type="text"
                placeholder='Username'
                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition duration-200'
            />
            <input 
                type="password" 
                placeholder='Password' 
                className='w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:border-blue-500'
            />
            <button className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200'>
                Login
            </button>
            
            <p className='text-sm text-gray-500 mt-4'>Don't have an account? <Link to='/register' className='text-blue-500 hover:text-blue-600'>Register</Link></p>
        </div>
    </div>
  )
}

export default Login
