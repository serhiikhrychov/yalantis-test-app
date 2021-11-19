import React, { useEffect, useState } from 'react';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((response) => response.json())
      .then(setUsers);
  });
  // return users.map((user) => <div>{JSON.stringify(user)}</div>);
  // return <div>{users}</div>;
  // let objs = Array.from(users);
  let shit = users.map((user) => JSON.stringify(user));
  let shit1 = Array.from(shit);
  // console.log(Array.isArray(users));
  return <div>{typeof shit1}</div>;
};
