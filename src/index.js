import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import BirthWindow from './Components/BirthWindow';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BirthWindow />
  </React.StrictMode>,
  document.getElementById('root')
);
