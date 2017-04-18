import React, { Component } from 'react';


class Todo extends Component{

    constructor(){
        super()
        this.state{
            list= this.list
        }
    }

    render(){
        return(
            <div>
            
            <h1>    Todo List </h1>
            <input type="text"/> <br/>
            <button> Add </button>
            <button> Delete </button>
            </div>
        );
    }
}

export default Todo;