import React, { useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([
    {
      id: "MATH201",
      title: "Calculus II",
      department: "Mathematics",
      credits: 4,
      description:
        "Advanced calculus including integration techniques and series",
      instructor: "Dr. Maria Garcia",
      time: "TTh 2:00-3:30 PM",
      location: "Math Building 205",
      enrolled: 38,
      capacity: 40,
      status: "Active",
    },
    {
      id: "CS301",
      title: "Data Structures",
      department: "Computer Science",
      credits: 3,
      description:
        "Introduction to data organization, linked lists, stacks, queues, and trees",
      instructor: "Prof. John Doe",
      time: "MWF 9:00-10:15 AM",
      location: "CS Building 110",
      enrolled: 45,
      capacity: 50,
      status: "Active",
    },
    {
      id: "ENG150",
      title: "English Literature",
      department: "English",
      credits: 3,
      description:
        "Study of classical and modern English literature, poetry, and prose",
      instructor: "Dr. Emily Johnson",
      time: "TTh 10:00-11:30 AM",
      location: "Humanities Hall 210",
      enrolled: 30,
      capacity: 35,
      status: "Active",
    },
    {
      id: "PHY220",
      title: "Physics II",
      department: "Physics",
      credits: 4,
      description:
        "Covers electricity, magnetism, optics, and modern physics concepts",
      instructor: "Dr. Alan Smith",
      time: "MWF 1:00-2:15 PM",
      location: "Science Building 305",
      enrolled: 28,
      capacity: 40,
      status: "Active",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    id: "",
    title: "",
    department: "",
    credits: "",
    description: "",
    instructor: "",
    time: "",
    location: "",
    enrolled: 0,
    capacity: 0,
    status: "Active",
  });

  // Stats
  const totalCourses = courses.length;
  const activeCourses = courses.filter((c) => c.status === "Active").length;
  const totalEnrolled = courses.reduce((sum, c) => sum + c.enrolled, 0);
  const avgEnrollment =
    courses.length > 0 ? Math.round(totalEnrolled / courses.length) : 0;

  // Search filter
  const filteredCourses = courses.filter((course) =>
    Object.values(course).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Handle add course form
  const handleAddCourse = (e) => {
    e.preventDefault();
    setCourses([...courses, { ...newCourse, id: Date.now().toString() }]);
    setNewCourse({
      id: "",
      title: "",
      department: "",
      credits: "",
      description: "",
      instructor: "",
      time: "",
      location: "",
      enrolled: 0,
      capacity: 0,
      status: "Active",
    });
    setShowForm(false);
  };

  return (
    <div className="p-6 space-y-6 lg:w-full lg:max-w-[1500px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Courses</h1>
          <p className="text-gray-500 text-sm md:text-base">
            Manage course catalog and schedules
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          + Add Course
        </button>
      </div>

      {/* Search */}
      <div className="bg-gray-100 p-4 rounded flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by course name, ID, department, or instructor..."
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 border rounded-lg bg-white text-center">
          <p className="text-gray-500 text-sm">Total Courses</p>
          <p className="text-xl font-bold">{totalCourses}</p>
        </div>
        <div className="p-4 border rounded-lg bg-white text-center">
          <p className="text-gray-500 text-sm">Active Courses</p>
          <p className="text-xl font-bold">{activeCourses}</p>
        </div>
        <div className="p-4 border rounded-lg bg-white text-center">
          <p className="text-gray-500 text-sm">Total Enrolled</p>
          <p className="text-xl font-bold">{totalEnrolled}</p>
        </div>
        <div className="p-4 border rounded-lg bg-white text-center">
          <p className="text-gray-500 text-sm">Avg. Enrollment</p>
          <p className="text-xl font-bold">{avgEnrollment}</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-400 w-full h-[350px] lg:h-[400px] md:h-[370px] rounded-lg p-6 text-white shadow-lg flex flex-col"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {course.title}
            </h2>
            <p className="text-sm md:text-xl italic">{course.department}</p>
            <p className="mt-2 md:text-xl flex-grow">{course.description}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Time: {course.time}</p>
            <p>Location: {course.location}</p>
            <p>
              Enrolled: {course.enrolled}/{course.capacity}
            </p>
            <span
              className={`mt-3 w-[70px] md:w-[90px] md:text-center md:py-2 inline-block px-3 py-1 md:text-xl rounded-full text-sm ${
                course.status === "Active" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {course.status}
            </span>
          </div>
        ))}
      </div>

      {/* Add Course Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add New Course</h2>
            <form onSubmit={handleAddCourse} className="space-y-3">
              <input
                type="text"
                placeholder="Course Title"
                value={newCourse.title}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, title: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Department"
                value={newCourse.department}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, department: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Instructor"
                value={newCourse.instructor}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, instructor: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Time"
                value={newCourse.time}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, time: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Location"
                value={newCourse.location}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, location: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                placeholder="Description"
                value={newCourse.description}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, description: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
