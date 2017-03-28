import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/app/App';
import './index.css';
import Menu from './components/menu/Menu';

const menus = ['Home',      'About',      'Services',      'Portfolio',      'Contact us']

ReactDOM.render(
  <div> <Menu menus={menus}/></div>,
  document.getElementById('root')
);
