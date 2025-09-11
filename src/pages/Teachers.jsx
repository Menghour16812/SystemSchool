import React, { useState } from "react";

export default function Teachers() {
  const [teachers, setTeachers] = useState([
    {
      id: "T001",
      name: "Hour",
      department: "Computer Science",
      email: "hour123@gmail.com",
      numberphone: "+855-123-321-231",
      specialization: "Machine Learning",
      experience: "12 years",
      status: "Active",
      courses: ["CS101", "CS301", "CS401"],
    },
  ]);

  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newTeacher, setNewTeacher] = useState({
    id: "",
    name: "",
    department: "",
    email: "",
    numberphone: "",
    specialization: "",
    experience: "",
    status: "Active",
    courses: [],
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      setTeachers(teachers.filter((t) => t.id !== id));
    }
  };

  const handleAddClick = () => {
    setEditingId(null);
    setNewTeacher({
      id: "",
      name: "",
      department: "",
      email: "",
      numberphone: "",
      specialization: "",
      experience: "",
      status: "Active",
      courses: [],
    });
    setShowForm(true);
  };

  const handleEditClick = (id) => {
    const teacher = teachers.find((t) => t.id === id);
    setNewTeacher(teacher);
    setEditingId(id);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher({ ...newTeacher, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTeacher.name || !newTeacher.department) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingId) {
      setTeachers(
        teachers.map((t) => (t.id === editingId ? { ...newTeacher } : t))
      );
    } else {
      setTeachers([
        ...teachers,
        { ...newTeacher, id: "T" + String(teachers.length + 1).padStart(3, "0") },
      ]);
    }

    setShowForm(false);
    setEditingId(null);
  };

  const filteredTeachers = teachers.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.id.toLowerCase().includes(search.toLowerCase());
    const matchesDept = filterDept === "All" || t.department === filterDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="p-4 md:p-6 lg:py-5 space-y-6 lg:w-full lg:max-w-[1500px] max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Teachers</h1>
          <p className="text-gray-500 text-sm md:text-base">
            Manage faculty and teaching staff
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
          {editingId ? "Edit Student" : "Add Teacher"}
        </button>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="p-4 bg-white rounded-lg shadow-md border">
          <h2 className="text-lg font-bold mb-3">
            {editingId ? "Edit Teacher" : "Add New Teacher"}
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newTeacher.name}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={newTeacher.department}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newTeacher.email}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="numberphone"
              placeholder="Phone"
              value={newTeacher.numberphone}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="specialization"
              placeholder="Specialization"
              value={newTeacher.specialization}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="experience"
              placeholder="Experience"
              value={newTeacher.experience}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <select
              name="status"
              value={newTeacher.status}
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
          placeholder="Search name ,department..."
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

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTeachers.map((t) => (
          <div
            key={t.id}
            className="p-5 border rounded-xl shadow-md bg-white space-y-3"
          >
            {/* Avatar + Status */}
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full font-bold text-gray-700">
                {t.name.charAt(0).toUpperCase()}
              </div>
              <span
                className={`px-3 py-1 text-xs rounded-full ${t.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                  }`}
              >
                {t.status}
              </span>
            </div>

            {/* Info */}
            <h2 className="font-bold text-lg">{t.name}</h2>
            <p className="text-gray-500">{t.department}</p>

            <div className="text-sm text-gray-700 space-y-2">
              {/* Email */}
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"
                  />
                </svg>
                <span>{t.email}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                  />
                </svg>
                <span>{t.numberphone}</span>
              </div>

              {/* Specialization */}
              <p>
                <strong>Specialization:</strong> {t.specialization}
              </p>

              {/* Experience */}
              <p>
                <strong>Experience:</strong> {t.experience}
              </p>
            </div>


            {/* Courses */}
            <div className="flex flex-wrap gap-2">
              {t.courses.map((c, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-gray-200 rounded-lg"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => handleEditClick(t.id)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(t.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
