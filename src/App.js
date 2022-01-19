// import { UserList } from './UserList';
import ChangedArray from './Components/ChangedArray';
import BirthWindow from './Components/BirthWindow';
import React, { useState, useEffect } from 'react';

function App() {
  const [birthData, updBirthData] = useState([]);
  const [activeUsers, updateActiveUsers] = useState([]);

  useEffect(() => {
    fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((response) => response.json())
      .then(updBirthData);
  }, []);

  // Work with local storage
  // React.useEffect(() => {
  //   const data = localStorage.getItem('my-active-user-list');
  //
  //   if (data) {
  //     updateActiveUsers(JSON.parse(data));
  //   }
  // }, []);
  //
  // React.useEffect(() => {
  //   localStorage.setItem('my-active-user-list', JSON.stringify(activeUsers));
  // });

  // TODO useEffect for radio buttons

  return (
    <div>
      <ChangedArray
        users={birthData}
        activeUsers={activeUsers}
        updateActiveUsers={updateActiveUsers}
      />
      <BirthWindow activeUsers={activeUsers} />
    </div>
  );
}

export default App;
