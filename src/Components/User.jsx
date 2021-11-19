import React, { useState } from 'react';
import classNames from 'classnames';
import '../Styles/User.css';
// import BirthWindow from './BirthWindow';

function User(props) {
  const buttons = ['Active', 'Not Active'];
  const [radioButton, setRadioButton] = useState('Not Active');
  return (
    <div className={classNames('user', { active: radioButton === 'Active' })}>
      <h5> {props.user.firstName + ' ' + props.user.lastName}</h5>
      {buttons.map((result, i) => {
        return (
          <div key={i}>
            <input
              className="radioButton"
              type={'radio'}
              value={result}
              name={`radioBtn-${props.user.id}`}
              checked={radioButton === result}
              onChange={(e) => setRadioButton(e.target.value)}
            />
            <b>{result}</b>
          </div>
        );
      })}
    </div>
  );
}

export default User;
