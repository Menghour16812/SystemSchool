import React, { useState } from "react";

export default function Grades() {
  const [grades, setGrades] = useState([
    {
      id: "STU001",
      name: "Hour",
      gander:"M",
      course: "Data Structures",
      midterm: 25,
      final: 50,
      assignment: 15,
      total: 90,
      grade: "A",
      gpa: 4.0,
    },
    {
      id: "STU002",
      name: "Kun",
      gander:"F",
      course: "English Literature",
      midterm: 20,
      final: 30,
      assignment: 10,
      total: 60,
      grade: "C",
      gpa: 2.5,
    },
    {
      id: "STU003",
      name: "Sophy",
      gander:"M",
      course: "Calculus II",
      midterm: 28,
      final: 40,
      assignment: 12,
      total: 80,
      grade: "B",
      gpa: 3.2,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newGrade, setNewGrade] = useState({
    id: "",
    name: "",
    gander:"",
    course: "",
    midterm: "",
    final: "",
    assignment: "",
  });

  // Function to calculate grade + GPA
  const calculateGradeAndGPA = (total) => {
    if (total >= 90) return { grade: "A", gpa: 4.0 };
    if (total >= 80) return { grade: "B", gpa: 3.0 };
    if (total >= 70) return { grade: "C", gpa: 2.0 };
    if (total >= 60) return { grade: "D", gpa: 1.0 };
    return { grade: "F", gpa: 0.0 };
  };

  // Search filter
  const filteredGrades = grades.filter((g) =>
    Object.values(g).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Handle Add
  const handleAddGrade = (e) => {
    e.preventDefault();

    const mid = Number(newGrade.midterm) || 0;
    const fin = Number(newGrade.final) || 0;
    const assign = Number(newGrade.assignment) || 0;
    const total = mid + fin + assign;

    const { grade, gpa } = calculateGradeAndGPA(total);

    setGrades([
      ...grades,
      {
        ...newGrade,
        id: Date.now().toString(),
        midterm: mid,
        final: fin,
        assignment: assign,
        total,
        grade,
        gpa,
      },
    ]);

    setNewGrade({
      id: "",
      name: "",
      gander:"",
      course: "",
      midterm: "",
      final: "",
      assignment: "",
    });
    setShowForm(false);
  };

  // === Stats for Cards ===
  const totalStudents = grades.length;
  const avgGPA =
    grades.length > 0
      ? (grades.reduce((sum, g) => sum + g.gpa, 0) / grades.length).toFixed(2)
      : 0;
  const highestTotal =
    grades.length > 0 ? Math.max(...grades.map((g) => g.total)) : 0;
  const avgTotal =
    grades.length > 0
      ? (grades.reduce((sum, g) => sum + g.total, 0) / grades.length).toFixed(2)
      : 0;

  const cards = [
    { title: "Total Students", value: totalStudents },
    { title: "Average GPA", value: avgGPA },
    { title: "Highest Total", value: highestTotal },
    { title: "Average Total", value: avgTotal },
  ];

  return (
    <div className="p-6 space-y-6 lg:w-full lg:max-w-[1500px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3">
        <div className="text-center m-auto">
          <h1 className="text-2xl md:text-2xl font-bold">Grades</h1>
          <p className="text-gray-500 text-sm md:text-base">
            Manage student grades & academic performance
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-black text-white px-4 py-2 rounded-lg m-auto text-xl mt-4 hover:bg-gray-800"
        >
          + Add Grade
        </button>
      </div>


      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7 w-full mx-auto">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl cursor-pointer"
          >
            <h1 className="text-[17px] font-semibold text-center">{item.title}</h1>
            <div className="flex items-center justify-between mt-2">
              <h1 className="text-xl font-bold m-auto">{item.value}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="bg-gray-100 p-4 rounded flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by student, course, grade..."
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      {/* Table View */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">gander</th>
              <th className="px-4 py-2 border">Course</th>
              <th className="px-4 py-2 border">Midterm</th>
              <th className="px-4 py-2 border">Final</th>
              <th className="px-4 py-2 border">Assignment</th>
              <th className="px-4 py-2 border">Total</th>
              <th className="px-4 py-2 border">Grade</th>
              <th className="px-4 py-2 border">GPA</th>
            </tr>
          </thead>
          <tbody>
            {filteredGrades.map((item) => (
              <tr key={item.id} className="text-center hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.gander}</td>
                <td className="px-4 py-2 border">{item.course}</td>
                <td className="px-4 py-2 border">{item.midterm}</td>
                <td className="px-4 py-2 border">{item.final}</td>
                <td className="px-4 py-2 border">{item.assignment}</td>
                <td className="px-4 py-2 border">{item.total}</td>
                <td className="px-4 py-2 border">{item.grade}</td>
                <td className="px-4 py-2 border">{item.gpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Grade Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add New Grade</h2>
            <form onSubmit={handleAddGrade} className="space-y-3">
              <input
                type="text"
                placeholder="Student Name"
                value={newGrade.name}
                onChange={(e) =>
                  setNewGrade({ ...newGrade, name: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Gander"
                value={newGrade.gander}
                onChange={(e) =>
                  setNewGrade({ ...newGrade, gander: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Course"
                value={newGrade.course}
                onChange={(e) =>
                  setNewGrade({ ...newGrade, course: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="number"
                placeholder="Midterm"
                value={newGrade.midterm}
                onChange={(e) =>
                  setNewGrade({ ...newGrade, midterm: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="number"
                placeholder="Final"
                value={newGrade.final}
                onChange={(e) =>
                  setNewGrade({ ...newGrade, final: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="number"
                placeholder="Assignment"
                value={newGrade.assignment}
                onChange={(e) =>
                  setNewGrade({ ...newGrade, assignment: e.target.value })
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
