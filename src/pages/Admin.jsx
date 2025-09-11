import React, { useState } from "react";

export default function Admin() {
  const [admins, setAdmins] = useState([
    { id: 1, name: "Super Admin", role: "Owner", status: "Active" },
    { id: 2, name: "John Doe", role: "Moderator", status: "Active" },
    { id: 3, name: "Jane Smith", role: "Editor", status: "Disabled" },
  ]);

  const [loginLogs] = useState([
    {
      id: 1,
      name: "Super Admin",
      time: "2025-09-10 09:30",
      ip: "192.168.1.10",
      device: "Chrome / Windows",
      status: "Success",
    },
    {
      id: 2,
      name: "John Doe",
      time: "2025-09-09 21:15",
      ip: "192.168.1.22",
      device: "Safari / iPhone",
      status: "Success",
    },
    {
      id: 3,
      name: "Jane Smith",
      time: "2025-09-09 18:40",
      ip: "192.168.1.33",
      device: "Firefox / Linux",
      status: "Failed",
    },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ role: "", status: "" });

  // Handle edit click
  const handleEdit = (admin) => {
    setEditingId(admin.id);
    setEditForm({ role: admin.role, status: admin.status });
  };

  // Handle save after editing
  const handleSave = (id) => {
    setAdmins((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, role: editForm.role, status: editForm.status } : a
      )
    );
    setEditingId(null);
  };

  // Handle remove admin
  const handleRemove = (id) => {
    setAdmins((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="w-full px-2 py-3 space-y-6">
      <h1 className="text-xl text-center font-bold mb-5">
        Admin Management & Login Control
      </h1>

      {/* Login Control */}
      <div className="p-4 border rounded-xl shadow-sm bg-white">
        <h2 className="text-lg font-semibold mb-3">Login Control</h2>
        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked />
            <span>Enable Admin Login</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Enable Two-Factor Authentication</span>
          </label>
          <label className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <span>Session Timeout:</span>
            <select className="border rounded px-2 py-1 mt-1 sm:mt-0">
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
            </select>
          </label>
        </div>
      </div>

      {/* Admin Accounts */}
      <div className="p-4 border rounded-xl shadow-sm bg-white">
        <h2 className="text-lg font-semibold mb-3">Admin Accounts</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">Name</th>
                <th className="border px-3 py-2">Role</th>
                <th className="border px-3 py-2">Status</th>
                <th className="border px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id}>
                  <td className="border px-3 py-2">{admin.name}</td>
                  <td className="border px-3 py-2">
                    {editingId === admin.id ? (
                      <select
                        value={editForm.role}
                        onChange={(e) =>
                          setEditForm((prev) => ({
                            ...prev,
                            role: e.target.value,
                          }))
                        }
                        className="border rounded px-2 py-1"
                      >
                        <option>Owner</option>
                        <option>Moderator</option>
                        <option>Editor</option>
                        <option>Viewer</option>
                      </select>
                    ) : (
                      admin.role
                    )}
                  </td>
                  <td className="border px-3 py-2">
                    {editingId === admin.id ? (
                      <select
                        value={editForm.status}
                        onChange={(e) =>
                          setEditForm((prev) => ({
                            ...prev,
                            status: e.target.value,
                          }))
                        }
                        className="border rounded px-2 py-1"
                      >
                        <option>Active</option>
                        <option>Disabled</option>
                      </select>
                    ) : (
                      admin.status
                    )}
                  </td>
                  <td className="border px-3 py-2">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {editingId === admin.id ? (
                        <>
                          <button
                            onClick={() => handleSave(admin.id)}
                            className="px-2 py-1 bg-green-500 text-white rounded"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="px-2 py-1 bg-gray-500 text-white rounded"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEdit(admin)}
                            className="px-2 py-1 bg-blue-500 text-white rounded"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleRemove(admin.id)}
                            className="px-2 py-1 bg-red-500 text-white rounded"
                          >
                            Remove
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Login Activity Log */}
      <div className="p-4 border rounded-xl shadow-sm bg-white">
        <h2 className="text-lg font-semibold mb-3">Login Activity Log</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">Admin</th>
                <th className="border px-3 py-2">Time</th>
                <th className="border px-3 py-2">IP Address</th>
                <th className="border px-3 py-2">Device</th>
                <th className="border px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {loginLogs.map((log) => (
                <tr key={log.id}>
                  <td className="border px-3 py-2">{log.name}</td>
                  <td className="border px-3 py-2">{log.time}</td>
                  <td className="border px-3 py-2">{log.ip}</td>
                  <td className="border px-3 py-2">{log.device}</td>
                  <td
                    className={`border px-3 py-2 ${
                      log.status === "Failed"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {log.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security Settings */}
      <div className="p-4 border rounded-xl shadow-sm bg-white">
        <h2 className="text-lg font-semibold mb-3">Security Settings</h2>
        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Require password change every 90 days</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Restrict login to specific IPs</span>
          </label>
        </div>
      </div>
    </div>
  );
}
