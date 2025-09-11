import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Navhead from '../components/Navhead'
import Dashboard from '../pages/Dashboard'
import Students from '../pages/Students'
import Teachers from '../pages/Teachers'
import Courses from '../pages/Courses'
import Grades from '../pages/Grades'
import Attendance from '../pages/Attendance'
import Workflows from '../pages/Workflows'
import Reports from '../pages/Reports'
import Error404 from '../pages/Error404'
import Footer from '../components/Footer'
import Admin from '../pages/Admin'
export default function MainRouter() {
  return (
     <BrowserRouter>
      <div className="flex h-[100vh] lg:overflow-hidden">
        {/* Sidebar */}
        <div className="w-[40%] lg:w-[15%] h-full rounded-lg text-white lg:flex hidden ">
          <Nav />
        </div>
        <div className="w-[100%] lg:w-[85%] lg:h-full relative lg:overflow-auto ">
          <div className=' bg-blue-700 z-100 sticky top-0 lg:w-full lg:h-[80px] flex items-center '>
            <Navhead></Navhead>
          </div>
          <div className='w-full h-[140vh] lg:h-[100vh] md:h-[140vh]'>
            <Routes>
            <Route index element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard/>} />
            <Route path="Students" element={<Students/>} />
            <Route path="Teachers" element={<Teachers/>} />
            <Route path="Courses" element={<Courses/>} />
            <Route path="Grades" element={<Grades/>} />
            <Route path="Attendance" element={<Attendance/>} />
            <Route path="Workflows" element={<Workflows/>} />
            {/* <Route path="Reports" element={<Reports/>} /> */}
            <Route path="Admin" element={<Admin/>} />
            <Route path="*" element={<Error404/>} />
          </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}


