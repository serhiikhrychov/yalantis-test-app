import React, { useState } from 'react';
import classNames from 'classnames';
import '../Styles/User.css';

function User(props) {
  const buttons = ['Active', 'Not Active'];
  const [radioButton, setRadioButton] = useState('Not Active');

  // work with user array according to radiobutton
  const onUserSelect = (e, buttonState) => {
    const currentActiveUsers =
      buttonState === 'Active'
        ? [...props.activeUsers, props.user]
        : props.activeUsers.filter(
            (activeUser) => activeUser.id !== props.user.id
          );
    setRadioButton(e.target.value);
    // array of active users (from app js)
    props.updateActiveUsers(currentActiveUsers);
  };

  return (
    <div className={classNames('user', { active: radioButton === 'Active' })}>
      <h5 id={props.user.dob}>
        {props.user.firstName + ' ' + props.user.lastName}
      </h5>
      {buttons.map((buttonState, i) => {
        return (
          <div key={i}>
            <input
              className="radioButton"
              type={'radio'}
              value={buttonState}
              name={`radioBtn-${props.user.id}`}
              checked={radioButton === buttonState}
              onChange={(e) => onUserSelect(e, buttonState)}
            />
            <b>{buttonState}</b>
          </div>
        );
      })}
    </div>
  );
}

export default User;
