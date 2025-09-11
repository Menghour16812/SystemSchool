import React, { useState, useMemo } from "react";

export default function Attendance() {
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All Courses");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const [attendance, setAttendance] = useState([
    { id: "STU001", name: "John Smith", course: "Data Structures", status: "Present" },
    { id: "STU002", name: "Alice Johnson", course: "Algorithms", status: "Absent" },
    { id: "STU003", name: "Robert Brown", course: "Web Development", status: "Late" },
    { id: "STU004", name: "Emily Davis", course: "Operating Systems", status: "Present" },
  ]);

  // Stats calculation
  const stats = useMemo(() => {
    const total = attendance.length;
    const present = attendance.filter((a) => a.status === "Present").length;
    const absent = attendance.filter((a) => a.status === "Absent").length;
    const late = attendance.filter((a) => a.status === "Late").length;
    return {
      present,
      absent,
      late,
      overallRate: total ? Math.round((present / total) * 100) : 0,
    };
  }, [attendance]);

  // Optimized filtering
  const filtered = useMemo(() => {
    return attendance.filter((a) => {
      const matchSearch =
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.id.toLowerCase().includes(search.toLowerCase()) ||
        a.course.toLowerCase().includes(search.toLowerCase());
      const matchCourse =
        courseFilter === "All Courses" || a.course === courseFilter;
      const matchStatus =
        statusFilter === "All Status" || a.status === statusFilter;
      return matchSearch && matchCourse && matchStatus;
    });
  }, [attendance, search, courseFilter, statusFilter]);

  return (
    <div className="p-6 space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <input
          type="text"
          placeholder="Search by name, ID, or course"
          className="border p-2 rounded-lg w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded-lg text-lg"
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
        >
          <option>All Courses</option>
          <option>Data Structures</option>
          <option>Algorithms</option>
          <option>Web Development</option>
          <option>Operating Systems</option>
        </select>
        <select
          className="border p-2 rounded-lg text-lg"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All Status</option>
          <option>Present</option>
          <option>Absent</option>
          <option>Late</option>
        </select>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card
          title="Overall Rate"
          value={`${stats.overallRate}%`}
          icon={
            <svg
              className="w-6 h-6 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4.5V19a1 1 0 001 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
              />
            </svg>
          }
        />
        <Card
          title="Present Today"
          value={stats.present}
          icon={
            <svg
              className="w-6 h-6 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 01-.696.288H7.04A2.984 2.984 0 004.055 7.04v1.262a.986.986 0 01-.288.696l-.893.893a2.984 2.984 0 000 4.22l.893.893c.184.184.288.435.288.696v1.262a2.984 2.984 0 002.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 004.22 0l.893-.893c.184-.184.435-.288.696-.288h1.262a2.984 2.984 0 002.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 000-4.22l-.893-.893a.985.985 0 01-.288-.696V7.04a2.984 2.984 0 00-2.984-2.984h-1.262a.985.985 0 01-.696-.288l-.893-.893A2.984 2.984 0 0012 2Zm3.683 7.73a1 1 0 00-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 00-1.415 1.414l1.985 1.984a1 1 0 001.414 0l4.96-4.96Z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
        <Card
          title="Absent Today"
          value={stats.absent}
          icon={
            <svg
              className="w-6 h-6 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 01-.696.288H7.04A2.984 2.984 0 004.055 7.04v1.262a.986.986 0 01-.288.696l-.893.893a2.984 2.984 0 000 4.22l.893.893c.184.184.288.435.288.696v1.262a2.984 2.984 0 002.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 004.22 0l.893-.893c.184-.184.435-.288.696-.288h1.262a2.984 2.984 0 002.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 000-4.22l-.893-.893a.985.985 0 01-.288-.696V7.04a2.984 2.984 0 00-2.984-2.984h-1.262a.985.985 0 01-.696-.288l-.893-.893A2.984 2.984 0 0012 2Zm4.243 5.757a1 1 0 010 1.414L13.414 12l2.829 2.829a1 1 0 11-1.414 1.414L12 13.414l-2.829 2.829a1 1 0 11-1.414-1.414L10.586 12 7.757 9.171a1 1 0 011.414-1.414L12 10.586l2.829-2.829a1 1 0 011.414 0Z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
        <Card
          title="Late Today"
          value={stats.late}
          icon={
            <svg
              className="w-6 h-6 text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 
                4.477 10 10-4.477 10-10 10S2 
                17.523 2 12Zm11-4a1 1 0 1 0-2 
                0v4a1 1 0 0 0 .293.707l3 
                3a1 1 0 0 0 1.414-1.414L13 
                11.586V8Z"
              />
            </svg>
          }
        />
      </div>

      {/* Attendance table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-xl">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Course</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50">
                <td className="p-3 border">{a.id}</td>
                <td className="p-3 border">{a.name}</td>
                <td className="p-3 border">{a.course}</td>
                <td className="p-3 border">{a.status}</td>
                <td className="p-3 border space-x-2 text-center  ">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-lg mb-2"
                    onClick={() =>
                      setAttendance((prev) =>
                        prev.map((x) =>
                          x.id === a.id ? { ...x, status: "Present" } : x
                        )
                      )
                    }
                  >
                    Present
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-lg mb-2"
                    onClick={() =>
                      setAttendance((prev) =>
                        prev.map((x) =>
                          x.id === a.id ? { ...x, status: "Absent" } : x
                        )
                      )
                    }
                  >
                    Absent
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg"
                    onClick={() =>
                      setAttendance((prev) =>
                        prev.map((x) =>
                          x.id === a.id ? { ...x, status: "Late" } : x
                        )
                      )
                    }
                  >
                    Late
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="p-3 text-center text-gray-500">
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Card component
function Card({ title, value, icon }) {
  return (
    <div className="p-4 border rounded-xl shadow bg-white flex flex-col gap-3 items-center">
      <div className="text-xl text-center mb-2">{title}</div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-gray-500 flex items-center justify-center">{icon}</div>
    </div>
  );
}
