import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render( 
    <Routing /> ,
    document.getElementById('root')
);