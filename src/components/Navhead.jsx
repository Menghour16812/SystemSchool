import React, { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Navhead() {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="lg:hidden block lg:p-0 px-4 py-2 ">
          {!open ? (
            <i
              className="bi bi-list text-3xl cursor-pointer hover:text-gray-300"
              onClick={() => setOpen(true)}
            ></i>
          ) : (
            <i
              className="bi bi-x-circle text-3xl cursor-pointer hover:text-gray-300"
              onClick={() => setOpen(false)}
            ></i>
          )}
        </div>

        <div className="items-center px-2 gap-6 flex lg:w-full lg:justify-between">
          <h1 className="text-white lg:text-2xl lg:font-bold lg:ml-4">
            School Management System
          </h1>
          {/* ✅ fixed image path (no /public needed) */}
          <div className='flex flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
            <p className='text-[13px]'>KHON.MENGHOUR</p>
          </div>
        </div>
      </div>

      {/* Sidebar + Overlay */}
      {open && (
        <>
          {/* Sidebar */}
          <div className="w-[45%] lg:w-[15%] rounded-b-xl bg-gray-900 text-white flex absolute z-20 min-h-screen">
            <Nav />
          </div>

          {/* Overlay (click to close) */}
          <div
            className="fixed inset-0 bg-black/40 z-10"
            onClick={() => setOpen(false)}
          ></div>
        </>
      )}
    </div>
  )
}
