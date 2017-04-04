import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SampleOne from './component/sample01';
import SampleTwo from './component/sampleTwo';


ReactDOM.render(
  <div> 
    <App/>
    <SampleOne/>  
    <SampleTwo/>
  </div>,
  document.getElementById('root')
);
