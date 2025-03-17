// src/components/UserTable.js
import React from 'react';

const UserTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.status}</td>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;