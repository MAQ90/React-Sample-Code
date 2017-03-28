import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './components/index.css';
import MenuBar from './components/MenuBar/MenuBar';

const menus = ['Home',      'About',      'Services',      'Portfolio',      'Contact us']

ReactDOM.render(
  <div> <MenuBar menus={menus}/></div>,
  document.getElementById('root')
);
