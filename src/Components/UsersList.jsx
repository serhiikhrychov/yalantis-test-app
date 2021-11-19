import React from 'react';
import User from './User';
import '../Styles/UsersList.css';

function UsersList(props) {
  return (
    <div className="char">
      <h2>{props.char}</h2>
      {props.list.length === 0 ? (
        <div>
          <i className="noEmployees">No employees</i>
        </div>
      ) : (
        <div>
          {props.list.map((user) => (
            <User user={user} key={user.id} />
          ))}
          ;
        </div>
      )}
    </div>
  );
}

export default UsersList;
