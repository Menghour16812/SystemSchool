import React from 'react'

export default function Footer() {
  return (
    <div className="w-full h-[50px] bg-gray-900 lg:bg-gray-900  text-white flex justify-center items-center lg:text-sm text-[12px] md:text-md">
      © {new Date().getFullYear()}-RUPP-MENGHOUR
    </div>
  )
}
