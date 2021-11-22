import React from 'react';
import UsersList from './UsersList';

function WorkWithArray(users) {
  let data = users.reduce((acc, user) => {
    // get first letter of name of current element
    let alphabet = user.firstName[0];

    // if there is no property in accumulator with this letter create it
    if (!acc[alphabet]) acc[alphabet] = [user];
    // if there is push current element to children array for that letter
    else acc[alphabet].push(user);

    // return accumulator
    return acc;
  }, {});

  return data;
}

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const ChangedArray = ({ users, updateActiveUsers, activeUsers }) => {
  const transArray = WorkWithArray(users);
  return alphabet.map((char) => (
    <UsersList
      char={char}
      list={transArray[char] || []}
      key={char}
      activeUsers={activeUsers}
      updateActiveUsers={updateActiveUsers}
    />
  ));
};

export default ChangedArray;
