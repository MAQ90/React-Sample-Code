import React, { Component } from 'react';
import * as MUI from 'material-ui';
import './SignUp.css';

class SignUp extends Component {

  constructor(){
    super()
    this.state={
      finished: false,
      stepIndex: 0,
      value: null,
    }
  }
 
handleSignUp(ev){
  ev.preventDefault();
  var credential = {};
  credential.dName = this.refs.dName.getValue();
  credential.uName = this.refs.uName.getValue();
  credential.eMail = this.refs.eMail.getValue();
  credential.gender = this.refs.gender.getValue();
  credential.dOb = this.refs.dOb.getValue();
  credential.passWord = this.refs.passWord.getValue();

  this.props.onSignUp(credential);
}

  handleChange = (event, index, value) => this.setState({ value });
  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: '12px 0' }}>
        <MUI.RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 && (
          <MUI.FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const { finished, stepIndex } = this.state;

    return (



      <div className='log-Container'>
        <MUI.Paper className='log-paper' zDepth={2}>
          <MUI.Stepper activeStep={stepIndex} orientation="vertical">

            <MUI.Step>
              <MUI.StepLabel>Account Informantion</MUI.StepLabel>
              <MUI.StepContent>
                <MUI.TextField
                  hintText="Name"
                  floatingLabelText="Display Name"
                  ref="dName"
                /> <br />
                <MUI.TextField
                  hintText="User Name"
                  floatingLabelText="Here User Name"
                  ref="uName"
                /> <br />
                <MUI.TextField
                  hintText="E-mail"
                  floatingLabelText="E-mail"
                  type="email"
                  ref="eMail"

                /> <br />
                {this.renderStepActions(0)}
              </MUI.StepContent>
            </MUI.Step>

            <MUI.Step>
              <MUI.StepLabel>Personal Informantion</MUI.StepLabel>
              <MUI.StepContent>
                <div>
                  <MUI.SelectField
                    floatingLabelText="Gender"
                    value={this.state.value}
                    onChange={this.handleChange}
                    ref="gender"
                  >
                    <MUI.MenuItem value={null} primaryText="" />
                    <MUI.MenuItem value={false} primaryText="Male" />
                    <MUI.MenuItem value={true} primaryText="Female" />
                  </MUI.SelectField>
                </div>
                <br />
                <MUI.DatePicker hintText="Portrait Dialog" ref="dOb"/>
                <br />
                {this.renderStepActions(1)}
              </MUI.StepContent>
            </MUI.Step>

            <MUI.Step>
              <MUI.StepLabel>Privacy</MUI.StepLabel>
              <MUI.StepContent>
                <MUI.TextField
                  hintText="Password Field"
                  floatingLabelText="Password"
                  type="password"
                  ref="passWord"
                /><br />
                <MUI.TextField
                  hintText="Re-Type Password"
                  floatingLabelText="Re-Type Password"
                  type="password"
                /><br />
                {this.renderStepActions(2)}
              </MUI.StepContent>
            </MUI.Step>

          </MUI.Stepper>

          {finished && (<MUI.FlatButton label="SignUp" primary={true} onClick={handleSignUp} />



          )}
        </MUI.Paper>
      </div>

    );
  }
}

export default SignUp;