import React, { useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([
    { id: "ST001", name: "Hour",gander:'M', department: "Computer Science", year: 3, gpa: 3.65, status: "Active" },
    { id: "ST002", name: "Kun",gander:'F', department: "Information Technology", year: 2, gpa: 3.25, status: "Inactive" },
    { id: "ST003", name: "Sok",gander:'M', department: "Mathematics", year: 1, gpa: 3.10, status: "Active" },
    { id: "ST004", name: "Dara",gander:'F', department: "Physics", year: 4, gpa: 3.80, status: "Active" },
  ]);

  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    gander:"",
    department: "",
    year: "",
    gpa: "",
    status: "Active",
  });
  const [editingId, setEditingId] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const handleAddClick = () => {
    setEditingId(null);
    setNewStudent({ id: "", name: "",gander:"", department: "", year: "", gpa: "", status: "Active" });
    setShowForm(true);
  };

  const handleEditClick = (id) => {
    const student = students.find((s) => s.id === id);
    setNewStudent(student);
    setEditingId(id);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.department) {
      alert("Please fill in all fields");
      return;
    }

    if (editingId) {
      setStudents(
        students.map((s) =>
          s.id === editingId ? { ...newStudent, year: +newStudent.year, gpa: +newStudent.gpa } : s
        )
      );
    } else {
      setStudents([...students, { ...newStudent, year: +newStudent.year, gpa: +newStudent.gpa }]);
    }

    setShowForm(false);
    setEditingId(null);
  };

  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase());
    const matchesDept = filterDept === "All" || s.department === filterDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="p-4 md:p-6  lg:py-5 space-y-6 lg:w-full lg:max-w-[1500px] max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Students Page</h1>
          <p className="text-gray-500 text-sm md:text-base">
            Manage all students information from here
          </p>
        </div>
        <div>
          <button
          onClick={handleAddClick}
          className=" w-[50%] flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 m-auto md:w-auto md:justify-end md:flex"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          {editingId ? "Edit Student" : "Add Student"}
        </button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="p-4 bg-white rounded shadow-lg border">
          <h2 className="text-lg font-bold mb-3">
            {editingId ? "Edit Student" : "Add New Student"}
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            <input
              type="text"
              name="id"
              placeholder="Student ID"
              value={newStudent.id}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newStudent.name}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="gander"
              placeholder="gander"
              value={newStudent.gander}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={newStudent.department}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={newStudent.year}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="number"
              step="0.01"
              name="gpa"
              placeholder="GPA"
              value={newStudent.gpa}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <select
              name="status"
              value={newStudent.status}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="flex gap-3 col-span-1 md:col-span-2">
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                {editingId ? "Update" : "Save"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:justify-between gap-3 bg-gray-100 p-4 rounded">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or id..."
          className="w-full md:w-2/3 border px-3 py-2 rounded"
        />
        <select
          value={filterDept}
          onChange={(e) => setFilterDept(e.target.value)}
          className="w-full md:w-1/3 border px-3 py-2 rounded"
        >
          <option value="All">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto ">
        <table className="min-w-[700px] md:w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 py-2">ID</th>
              <th className="border px-2 py-2">Name</th>
              <th className="border px-2 py-2">Gander</th>
              <th className="border px-2 py-2">Department</th>
              <th className="border px-2 py-2">Year</th>
              <th className="border px-2 py-2">GPA</th>
              <th className="border px-2 py-2">Status</th>
              <th className="border px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.id} className="hover:bg-gray-100 text-center">
                <td className="border px-2 py-2">{s.id}</td>
                <td className="border px-2 py-2">{s.name}</td>
                <td className="border px-2 py-2">{s.gander}</td>
                <td className="border px-2 py-2">{s.department}</td>
                <td className="border px-2 py-2">{s.year}</td>
                <td className="border px-2 py-2">{s.gpa}</td>
                <td className="border px-2 py-2">
                  <span className={`px-1 py-1 rounded text-white ${s.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
                    {s.status}
                  </span>
                </td>
                <td className="border px-2 py-2 space-x-1">
                  <button onClick={() => handleEditClick(s.id)} className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                  <button onClick={() => handleDelete(s.id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
