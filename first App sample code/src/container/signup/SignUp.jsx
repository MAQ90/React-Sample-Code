import React, { Component } from 'react';
import * as MUI from 'material-ui';
import './SignUp.css';

class SignUp extends Component {
  state = {
    finished: false,
    stepIndex: 0,
  };


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
            <MUI.StepLabel>Select campaign settings</MUI.StepLabel>
            <MUI.StepContent>
              <p>aphs to show on, and more.</p>
              {this.renderStepActions(0)}
            </MUI.StepContent>
          </MUI.Step>

          <MUI.Step>
            <MUI.StepLabel>Select campaign settings</MUI.StepLabel>
            <MUI.StepContent>
              <p>aphs to show on, and more.</p>
              {this.renderStepActions(1)}
            </MUI.StepContent>
          </MUI.Step>

          <MUI.Step>
            <MUI.StepLabel>Select campaign settings</MUI.StepLabel>
            <MUI.StepContent>
              <p>aphs to show on, and more.</p>
              {this.renderStepActions(2)}
            </MUI.StepContent>
          </MUI.Step>

        </MUI.Stepper>

        {finished && (
          <p style={{ margin: '20px 0', textAlign: 'center' }}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({ stepIndex: 0, finished: false });
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
        </MUI.Paper>
      </div>

    );
  }
}

export default SignUp;