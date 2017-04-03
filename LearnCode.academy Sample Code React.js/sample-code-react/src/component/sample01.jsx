import React, { Component } from 'react';


class SampleOne extends Component{

    constructor(){
        super()
        this.name = "Muhammad Aamir"
    }
    render(){
        return(
            <h1>It's {this.name}...!!!</h1>
        )
    }
}

export default SampleOne;