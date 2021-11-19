import React, { useEffect, useState } from 'react';

export const UserArray = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((response) => response.json())
      .then(setUsers);
  });
  return users;
};
