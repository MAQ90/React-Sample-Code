import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as MUI from 'material-ui';
import './SignIn.css'
import Help from 'material-ui/svg-icons/action/help';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import {grey400} from 'material-ui/styles/colors'

class SignIn extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div className="log-Container">
                        <MUI.Paper className="log-paper" zDepth={3}>
                            <form>
                                <MUI.TextField ref="email" hintText="E-mail" floatingLabelText="E-mail Here" fullWidth={1}/>
                                <MUI.TextField ref="password" hintText="Password" floatingLabelText="Password Here" type="password" fullWidth={true}/>
                                <div>
                                    <MUI.Checkbox label="Remember me" className="log-check"labelStyle={{color: grey400}} iconStyle={{color: grey400,borderColor: grey400, fill: grey400}}/>
                                    <MUI.RaisedButton label="SignIn" className="log-btn" primary={1}/>
                                </div>
                            </form>
                        </MUI.Paper>
                        <div className="log-btnDiv">
                            <MUI.FlatButton label="Register" className="log-register" icon={<PersonAdd/>}/>
                            <MUI.FlatButton label="Forgot Password?" className="log-forgot" icon={<Help />}/>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default SignIn;