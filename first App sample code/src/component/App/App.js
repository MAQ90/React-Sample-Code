import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return ( <
            div >
            <
            h1 > welcome app < /h1> { this.props.children } <
            /div>
        );
    }
}

export default App;