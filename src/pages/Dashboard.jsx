import React from 'react'

export default function Dashboard() {
  const data = [
    { title: 'Total Students', sold: '221', percentage: '+12% from last month', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"> <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /> </svg>) },
    { title: 'Active Teachers ', sold: '121', percentage: '-11% from last month', icon: (<svg class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.78552 9.5 12.7855 14l9-4.5-9-4.5-8.99998 4.5Zm0 0V17m3-6v6.2222c0 .3483 2 1.7778 5.99998 1.7778 4 0 6-1.3738 6-1.7778V11" /></svg>) },
    { title: 'Cuorses', sold: '321', percentage: '+5% from last month', icon: (<svg class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" /></svg>) },
    { title: 'Attendance Rate', sold: '421', percentage: '+2% from last month', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" /> <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>) },
  ]
  // === recent===
  const recent = [
    { title: 'New student enrolled', skill: 'Janh Smith-Computer Science', time: '2 hours ago' },
    { title: 'Grade submitted', skill: 'Mathematics 101-Final Exam', time: '4 hours ago' },
    { title: 'Attendace recorded', skill: 'Physics Lab-Section A', time: '6 hours ago' },
    { title: 'Courses updated', skill: 'Database System-Syllabus', time: '1 day ago' },
  ]
  // ====event===
  const event = [
    { title: 'Parent-Teacher Meeting', skill: 'Annual meeting for student progress', time: 'Sep 15, 2023',p:'deadline ' },
    { title: 'Science Fair', skill: 'Exhibition of student projects', time: 'Oct 10, 2023',p:'meeting' },
    { title: 'Sports Day', skill: 'Inter-school sports competition', time: 'Nov 5, 2023',p:'exam' },
    { title: 'Art Exhibition', skill: 'Display of student artworks', time: 'Dec 12, 2023',p:'holiday' },
  ]
  return (
    <div className="w-full h-screen lg:p-3 lg:text-3xl md:p-2 md:text-xl p-2 font-bold">
      <h1 className="text-center text-[30px]">Welcome To Dashboard</h1>

      {/* Grid layout */}

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7 w-[90%]   mx-auto">
        {data.map((item) => (
          <div key={item.title} className="bg-gray-200  rounded-lg shadow-md p-6 flex flex-col justify-between  hover:shadow-xl cursor-pointer">
            <h1 className="text-[24px] font-semibold"> {item.title}</h1>
            <div className="flex items-center justify-between">
              <h1 className="text-[20px]">{item.sold}</h1>
              <span className='p-3 rounded-full  bg-gray-300'>{item.icon}</span>
            </div>
            <h1
              className={`text-[17px] font-medium ${item.percentage.includes('+') ? 'text-green-600' : 'text-red-600'
                }`}
            >
              {item.percentage}
            </h1>
          </div>
        ))}
      </div>
      {/* === card1 === */}
      <div className=' w-[90%] lg:w-[90%] lg:h-[550px] h-[550px] md:h-[90vh]  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-7 mx-auto'>
        <div className=' bg-gray-100 m-2 rounded-lg p-3 lg:p-4 '>
          <div className='heaader lg:mb-7 mb-2 md:mb-9'>
            <h1 className='text-[20px] md:text-[25px]  font-bold'>
              Recent Activties
            </h1>
            <span className='text-[14px] md:text-[17px] lg:text-[16px] text-gray-400'>Latest updates from across the university</span>
          </div>
          {recent.map((item) => (
            <div key={item.title} className='lg:px-4 md:px-4 px-3 rounded-lg  cursor-pointer'>
              <h1 className='font-bold  md:text-[16px] lg:text-[18px] text-[16px]'>{item.title}</h1>
              <h1 className='text-[14px] md:text-[15px] lg:text-[15px] font-medium text-gray-400'>{item.skill}</h1>
              <h1 className='text-[12px] md:text-[15px] lg:text-[15px] font-normal text-gray-600'>{item.time}</h1>
            </div>
          ))}
        </div>
        {/* === card2 === */}
        <div className=' bg-gray-100 m-2 rounded-lg p-3 lg:p-4 '>
          <div className='heaader lg:mb-7 mb-2 md:mb-9'>
            <h1 className='text-[20px] md:text-[25px] font-bold'>
              Upcoming Events
            </h1>
            <span className='text-[14px] md:text-[17px] lg:text-[16px] text-gray-400'>Latest updates from across the university</span>
          </div>
          {event.map((item) => (
              <div key={item.title} className=' lg:px-4 md:px-4 px-3 rounded-lg  cursor-pointer flex justify-between'>
                <div>
                  <h1 className='font-bold md:text-[16px] lg:text-[18px] text-[16px]'>{item.title}</h1>
                <h1 className='text-[14px] md:text-[15px] lg:text-[15px] font-medium text-gray-400'>{item.skill}</h1>
                <h1 className='text-[12px] md:text-[15px] lg:text-[15px] font-normal text-gray-600'>{item.time}</h1>
                </div>
                <div>
                  <span className='bg-red-600 text-white md:text-[17px] px-2 py-1 rounded-lg lg:text-[14px] text-[14px] lg:m-auto'>{item.p}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

