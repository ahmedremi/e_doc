
import { useState } from "react"
import Sidebar from "../../components/Sidebar.jsx"
import Header from "../../components/header.jsx"
import UsersManagement from "../usermanagement/index.js"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("users")

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto bg-[#f5f9fa] p-8">
          {activeTab === "users" && <UsersManagement />}
        </main>
      </div>
    </div>
  )
}

