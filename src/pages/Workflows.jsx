import React, { useState } from "react";

export default function Workflows() {
  const [steps, setSteps] = useState([
    {
      title: "Submit Application",
      desc: "Student submits enrollment application",
      person: "System",
      date: "2024-01-15",
      status: "completed",
    },
    {
      title: "Application Review",
      desc: "Admissions office reviews application",
      person: "Dr. Sarah Johnson",
      date: "2024-01-18",
      status: "completed",
    },
    {
      title: "Approval Process",
      desc: "Department head approves enrollment",
      person: "Dr. Robert Wilson",
      date: "2024-01-20",
      status: "inprogress",
    },
    {
      title: "Fee Payment",
      desc: "Student completes fee payment",
      date: "2024-01-25",
      status: "pending",
    },
    {
      title: "Course Registration",
      desc: "Student registers for courses",
      status: "pending",
    },
  ]);

  // ✅ Calculate progress dynamically
  const completedSteps = steps.filter((s) => s.status === "completed").length;
  const progressPercent = Math.round((completedSteps / steps.length) * 100);

  // ✅ Handle status change (Complete, In Progress, Pending)
  const updateStatus = (idx, newStatus) => {
    setSteps((prev) =>
      prev.map((step, i) =>
        i === idx ? { ...step, status: newStatus } : step
      )
    );
  };

  return (
    <div className="lg:w-[90%] lg:m-auto lg:mt-8 p-3">
      {/* Header */}
      <div className="lg:flex lg:justify-between lg:gap-[30px] md:flex md:justify-between md:gap-[30px] justify-center">
        <div className="w-full h-[70px] lg:px-4 text-center lg:text-start md:text-start md:px-3">
          <h1 className="lg:text-3xl font-bold text-2xl">Workflows</h1>
          <p className="text-gray-400">Manage and track university processes</p>
        </div>
        <div className="w-full h-[70px] lg:flex justify-end lg:items-center lg:px-4 md:text-end text-center">
          <button
            onClick={() =>
              setSteps((prev) => [
                ...prev,
                {
                  title: "New Workflow Step",
                  desc: "Describe the new process...",
                  person: "Unknown",
                  date: new Date().toISOString().split("T")[0],
                  status: "pending",
                },
              ])
            }
            className="bg-black hover:bg-gray-700 p-3 text-white rounded-lg lg:mt-0 mt-3 transition"
          >
            + New Workflow
          </button>
        </div>
      </div>

      {/* Action Workflows */}
      <div className="w-full lg:px-3 md:px-3 lg:mt-8 mt-4 md:mt-4">
        <h1 className="lg:text-3xl font-bold text-xl">Action Workflows</h1>
        <p className="text-gray-400">Track and manage ongoing processes</p>
      </div>

      {/* Card Layout */}
      <div className="w-full bg-gray-100 p-2 rounded-lg mt-3 lg:px-5 lg:py-3">
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold">Students Enrollment Processes</h1>
            <p className="bg-black text-gray-300 rounded-md px-2">Acatio</p>
          </div>
          <p className="text-gray-400 text-[12px]">
            Complete workflow for new student registration
          </p>
        </div>

        {/* ✅ Dynamic Progress */}
        <div className="mt-3">
          <div className="flex justify-between">
            <p className="font-bold">Progress</p>
            <p>{progressPercent}%</p>
          </div>
          <div className="w-full h-2 mt-2 bg-gray-300 rounded-md overflow-hidden">
            <div
              className="h-2 bg-black transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="mt-4 space-y-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex justify-between items-start border-b pb-3"
            >
              <div className="flex items-start gap-3">
                {/* Status Icon */}
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full text-sm
                    ${
                      step.status === "completed"
                        ? "bg-green-500 text-white"
                        : step.status === "inprogress"
                        ? "border-2 border-blue-500 text-blue-500"
                        : "border border-gray-400 text-gray-400"
                    }`}
                >
                  {step.status === "completed" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}

                  {step.status === "inprogress" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="6" />
                    </svg>
                  )}

                  {step.status === "pending" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  )}
                </span>

                {/* Text Info */}
                <div>
                  <h1 className="font-semibold">{step.title}</h1>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                  <p className="text-xs text-gray-500">
                    {step.person && `👤 ${step.person}`}{" "}
                    {step.date && `📅 ${step.date}`}
                  </p>
                </div>
              </div>

              {/* Right side actions */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => updateStatus(idx, "completed")}
                  className={`px-2 py-1 rounded text-sm border 
                    ${
                      step.status === "completed"
                        ? "bg-green-500 text-white"
                        : "text-green-600 border-green-500 hover:bg-green-50"
                    }`}
                >
                  Complete
                </button>
                <button
                  onClick={() => updateStatus(idx, "inprogress")}
                  className={`px-2 py-1 rounded text-sm border 
                    ${
                      step.status === "inprogress"
                        ? "bg-blue-500 text-white"
                        : "text-blue-600 border-blue-500 hover:bg-blue-50"
                    }`}
                >
                  In Progress
                </button>
                <button
                  onClick={() => updateStatus(idx, "pending")}
                  className={`px-2 py-1 rounded text-sm border 
                    ${
                      step.status === "pending"
                        ? "bg-gray-500 text-white"
                        : "text-gray-600 border-gray-400 hover:bg-gray-50"
                    }`}
                >
                  Pending
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
