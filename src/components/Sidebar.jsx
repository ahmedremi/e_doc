
import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react"



export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { id: "users", label: "Users management", icon: <Users className="h-5 w-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  ]

  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      <nav className="flex flex-col gap-2 p-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-left ${
              activeTab === item.id ? "bg-[#0a8a8a] text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto p-4">
        <button className="flex items-center gap-3 px-4 py-3 rounded-md text-left text-gray-700 hover:bg-gray-100 w-full">
          <LogOut className="h-5 w-5" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  )
}

