import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class SampleOne extends Component{

    constructor(){
        super()
        this.name = "Muhammad Aamir"
    }
    render(){
        return(
            <div className="jumbotron">
                <h1>It's {this.name}...!!!</h1>
                <p>This is my first example and i am learning react plus react routing </p>
                <Button bsStyle="primary">Primary</Button>
            </div>
        )
    }
}

export default SampleOne;