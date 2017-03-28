import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import SignIn from './components/SignIn/SignIn';
//import SignUp from './components/SignUp/SignUp';

ReactDOM.render(
  <div>
    <SignIn/>
  <App />
   </div>,
  document.getElementById('root')
);
