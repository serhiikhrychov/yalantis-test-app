import React from 'react';
import '../Styles/BirthWindow.css';

function ConvertTime(time) {
  const date = new Date(time);
  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function GetMonth(time) {
  const date = new Date(time);
  return date.toLocaleString('default', { month: 'long' });
}

function BirthWindow({ activeUsers }) {
  return (
    <div className="birthdayWindow">
      <h3>Employees birthday</h3>
      {activeUsers.map((user) => (
        <ul id="birthList" key={user.id}>
          {GetMonth(user.dob)}
          <li>
            {user.firstName} {user.lastName} - {ConvertTime(user.dob) + ' year'}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default BirthWindow;
