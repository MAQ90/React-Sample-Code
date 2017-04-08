import React, { Component } from 'react';



class SampleTwo extends Component() {

    constructor() {
        super();
        this.state = {
            signUp: [
                {
                    "firstName": "",
                    "UserName": "",
                    "PassWord": "",
                    "Age": 0
                }
                
            ]
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.signUp.map((Detail, i) => <TableRow key={i} signUp={Detail}></TableRow>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends Component() {
    render() {
        return (
            <tr>
                <td>{this.props.signUp.firstName}</td>
                <td>{this.props.signUp.PassWord}</td>
                <td>{this.props.signUp.UserName}</td>
                <td>{this.props.signUp.Age}</td>
            </tr>
        );
    }
}

export default SampleTwo;