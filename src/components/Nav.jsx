import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Nav() {
  return (

    <div className="navbar w-full h-full flex flex-col lg:px-4 lg:py-4 gap-1 md:text-2xl text-[13px] bg-gray-900 lg:text-lg ">
      <Link to="Dashboard" className="text-gray-200 px-3 py-3 rounded-2xl hover:bg-gray-700 hover:text-white hover:font-bold hover:sca flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart3 h-4 w-4 mr-3"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
        Dashboard
      </Link>
      <Link to="Students" className="text-gray-200 px-3 py-3 rounded-2xl hover:bg-gray-700  hover:text-white hover:font-bold hover:sca flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a6.5 6.5 0 0113 0" />
        </svg>
        Students
      </Link>
      <Link to="Teachers" className="text-gray-200 px-3 py-3 rounded-2xl hover:bg-gray-700 hover:text-white hover:font-bold hover:sca flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
          <path d="M6 21v-2c0-2.21 3.58-4 6-4s6 1.79 6 4v2H6z" />
        </svg>
        Teachers
      </Link>
      <Link to="Courses" className="text-gray-200 px-3 py-3 rounded-2xl hover:bg-gray-700 hover:text-white hover:font-bold hover:sca flex items-center">
        <svg class="h-4 w-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/></svg>
        Courses
      </Link>
      <Link to="Grades" className="text-gray-200 px-3 py-3 rounded-2xl hover:bg-gray-700 hover:text-white hover:font-bold hover:sca flex items-center me-3">
        <svg class="h-5 w-5 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.78552 9.5 12.7855 14l9-4.5-9-4.5-8.99998 4.5Zm0 0V17m3-6v6.2222c0 .3483 2 1.7778 5.99998 1.7778 4 0 6-1.3738 6-1.7778V11" />
        </svg>
        Grades
      </Link>
      <Link to="Attendance" className="text-gray-200 px-3 py-3 rounded-2xl hover:bg-gray-700 hover:text-white hover:font-bold hover:sca flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-4 w-4 mr-3" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/> <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
        Attendance
      </Link>
      <Link to="Workflows" className="text-gray-200 px-3 py-3 rounded-2xl hover:bg-gray-700 hover:text-white hover:font-bold hover:sca flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
          <path d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        Workflows
      </Link>
      {/* <Link to="Reports" className="text-gray-200 px-3 py-3 rounded-2xl hover:bg-gray-700 hover:text-white hover:font-bold hover:sca flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
          <path d="M3 3h18v18H3z" />
          <path d="M3 9h18M9 21V9" />
        </svg>
        Reports
      </Link> */}
      <Link to="Admin" className="text-gray-200 px-3 py-3 rounded-2xl hover:bg-gray-700 hover:text-white hover:font-bold hover:sca flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 .98l-.12.3a2 2 0 1 1-3.64 0l-.12-.3a1.65 1.65 0 0 0-1-.98 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-.98-1l-.3-.12a2 2 0 1 1 0-3.64l.3-.12a1.65 1.65 0 0 0 .98-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.12a1.65 1.65 0 0 0 1-.98l.12-.3a2 2 0 1 1 3.64 0l.12.3a1.65 1.65 0 0 0 1 .98h.12a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.12a1.65 1.65 0 0 0 .98 1l.3.12a2 2 0 1 1 0 3.64l-.3.12a1.65 1.65 0 0 0-.98 1v.12z" />
        </svg>
        Admin
      </Link>
      <div className='mt-[310px] lg:mt-[375px] md:mt-[475px]'>
        <Footer />
      </div>
    </div>
  )
}
