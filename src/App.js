import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import Dashboard from "./pages/dashboard";
import UserManagement from './pages/usermanagement';
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserManagement />} />
      </Route>

      {/* Redirect to login by default */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;