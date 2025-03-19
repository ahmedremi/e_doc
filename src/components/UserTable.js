
import { useState } from "react"
import { Trash2 } from "lucide-react"



export default function UserTable() {
  const [users, setUsers] = useState([
    { id: "1", status: "Activated", fullName: "Boudelia Dhikra", email: "d.boudelia@esi-sba.dz", role: "Student" },
    {
      id: "2",
      status: "Desactivated",
      fullName: "Mostefaoui Manel",
      email: "mm.mostefaoui@esi-sba.dz",
      role: "Student",
    },
    { id: "3", status: "Activated", fullName: "Laichaoui Amira", email: "a.laichaoui@esi-sba.dz", role: "Student" },
    { id: "4", status: "Activated", fullName: "Aini Ines", email: "i.aini@esi-sba.dz", role: "Student" },
    { id: "5", status: "Desactivated", fullName: "Saidi Malek", email: "m.saidi@esi-sba.dz", role: "Student" },
    { id: "6", status: "Desactivated", fullName: "Dadna Fatima Zahra", email: "fz.dadna@esi-sba.dz", role: "Teacher" },
    { id: "7", status: "Activated", fullName: "Houari Mohamed", email: "m.houari@esi-sba.dz", role: "Teacher" },
    {
      id: "8",
      status: "Activated",
      fullName: "Benikhlef Houssam Eddine",
      email: "he.beikhlef@esi-sba.dz",
      role: "Student",
    },
    {
      id: "9",
      status: "Desactivated",
      fullName: "Guerfi Ahmed Yacine",
      email: "ay.guerfi@esi-sba.dz",
      role: "Student",
    },
    { id: "10", status: "Activated", fullName: "Zaidi Basma Douaa", email: "bd.zaidi@esi-sba.dz", role: "Employer" },
  ])

  const [selectedUsers, setSelectedUsers] = useState([])
  const [selectAll, setSelectAll] = useState(false)

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(users.map((user) => user.id))
    }
    setSelectAll(!selectAll)
  }

  const handleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId))
    } else {
      setSelectedUsers([...selectedUsers, userId])
    }
  }

  const handleActivate = () => {
    setUsers(users.map((user) => (selectedUsers.includes(user.id) ? { ...user, status: "Activated" } : user)))
    setSelectedUsers([])
    setSelectAll(false)
  }

  const handleDeactivate = () => {
    setUsers(users.map((user) => (selectedUsers.includes(user.id) ? { ...user, status: "Desactivated" } : user)))
    setSelectedUsers([])
    setSelectAll(false)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-left">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="h-4 w-4 rounded border-gray-300 text-[#0a8a8a] focus:ring-[#0a8a8a]"
                    />
                    <Trash2 className="h-4 w-4 text-gray-400" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
                <th className="px-4 py-3 text-left font-medium">Full name</th>
                <th className="px-4 py-3 text-left font-medium">Email</th>
                <th className="px-4 py-3 text-left font-medium">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className={`border-b ${selectedUsers.includes(user.id) ? "bg-[#b3e6e6]" : ""}`}>
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="h-4 w-4 rounded border-gray-300 text-[#0a8a8a] focus:ring-[#0a8a8a]"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <span className={user.status === "Activated" ? "text-[#0a8a8a]" : "text-red-500"}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{user.fullName}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          className="px-6 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={selectedUsers.length === 0}
          onClick={handleDeactivate}
        >
          Desactivate
        </button>
        <button
          className="px-6 py-2 rounded-full bg-[#5cbfbf] text-white hover:bg-[#0a8a8a] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={selectedUsers.length === 0}
          onClick={handleActivate}
        >
          Activate
        </button>
      </div>
    </div>
  )
}

