import React, { useState } from "react";
import { Search, ChevronDown, Plus } from "lucide-react";
import UserTable from '../../components/usertable';

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-semibold text-[#0a8a8a]">Users Management</h1>

      {/* Search and Filters */}
      <div className="flex justify-between items-center">
        {/* Search Bar */}
        <div className="relative w-[400px]">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a8a8a]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters and Add Button */}
        <div className="flex gap-3">
          {/* Status Filter */}
          <div className="relative">
            <select
              className="appearance-none flex items-center gap-2 px-4 py-2 pr-8 rounded-full bg-white border border-gray-200"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Activated">Activated</option>
              <option value="Desactivated">Desactivated</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>

          {/* Year Filter */}
          <div className="relative">
            <select
              className="appearance-none flex items-center gap-2 px-4 py-2 pr-8 rounded-full bg-white border border-gray-200"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>

          {/* Add User Button */}
          <button className="p-2 rounded-full bg-[#0a8a8a] text-white">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* User Table */}
      <UserTable />
    </div>
  );
};

export default UserManagement;