// import { UserList } from './UserList';
import ChangedArray from './Components/ChangedArray';
import BirthWindow from './Components/BirthWindow';
import { useState, useEffect } from 'react';

function App() {
  const [birthData, updBirthData] = useState([]);
  const [activeUsers, updateActiveUsers] = useState([]);
  useEffect(() => {
    fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((response) => response.json())
      .then(updBirthData);
  }, []);
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
