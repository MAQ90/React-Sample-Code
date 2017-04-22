import React, { Component } from 'react';
import * as MUI from 'material-ui';
import './SignUp.css';

class SignUp extends Component {

  constructor() {
    super()
    this.totalBloodGroup=["A+","B+","AB+","O+","A-","B-","AB-","O-"]
    this.state = {
      bloodType: 'O+',
      dName: '',
      uName: '',
      eMail: '',
      gender: '1',
      dOb: '',
      passWord: '',
      address: '',
      contactNo: '',
    }
this.handleCreateUser = this.handleCreateUser.bind(this)

  }
  
  
  handleBloodGroupType = (event, index, value) => this.setState({bloodType: value});
  handleGenderTypeChange = (event, index, value) => this.setState({gender: value});

  handleCreateUser(ev) {
    ev.preventDefault();
    var credential = {};
    credential.dName = this.refs.dName.getValue();
    credential.uName = this.refs.uName.getValue();
    credential.eMail = this.refs.eMail.getValue();
    credential.gender = this.refs.gender.getValue();
    credential.dOb = this.refs.dOb.getValue();
    credential.passWord = this.refs.passWord.getValue();
    credential.bloodType = this.refs.bloodType.getValue();
    credential.address = this.refs.address.getValue();
    credential.contactNo = this.refs.contactNo.getValue();

    this.props.createUserRequest(credential);
  }


  render() {
    return (

      <div className='log-Container'>
        <form onSubmit={this.handleCreateUser}>
        <MUI.Paper className='log-paper' zDepth={2}>
          <MUI.TextField
            hintText="Name"
            floatingLabelText="Display Name"
            name="dName"
            ref="dName"
            required={true}
          /> <br />
          <MUI.TextField
            hintText="User Name"
            floatingLabelText="Here User Name"
            name="uName"
            ref="uName"
            required={true}
          /> <br />
          <MUI.TextField
            hintText="E-mail"
            floatingLabelText="E-mail"
            type="email"
            name="eMail"
            ref="eMail"
            required={true}
          /> <br />
          <MUI.TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            name="passWord"
            ref="passWord"
            required={true}
          /><br />
          <MUI.TextField
            hintText="Re-Type Password"
            floatingLabelText="Re-Type Password"
            name="rPassword"
            ref="rPassword"
            type="password"
            required={true}
          /><br />
          <div>
            <MUI.SelectField
              floatingLabelText="Gender"
              value={this.state.gender}
              onChange={this.handleGenderTypeChange}
              name="gender"
              ref="gender"
              required={true}
            >
              <MUI.MenuItem value={1} primaryText="Male" />
              <MUI.MenuItem value={2} primaryText="Female" />
            </MUI.SelectField>
          </div>
          <br />
          <div>
            <MUI.SelectField
              floatingLabelText="BloodType"            
              value={this.state.bloodType}
              onChange={this.handleBloodGroupType}
              name="bloodType"
              ref="bloodType"
              required={true}
            >
              
              {
                this.totalBloodGroup.map(totalBloodGroup => {
                    return <MUI.MenuItem key={totalBloodGroup} value={totalBloodGroup} primaryText={totalBloodGroup} />
                })
              }
            </MUI.SelectField>
          </div>
          <br />
           <MUI.TextField
            hintText="Contact Number"
            floatingLabelText="Contact Number"
            name="contactNo"
            ref="contactNo"
            required={true}
          />
          <br />
          <MUI.DatePicker hintText="Date of Birth" name="dOb" ref="dOb" required={true}/>
          <br />
          <MUI.TextField
          hintText="MultiLine with rows: 2 and rowsMax: 4"
          multiLine={true}
          rows={3}
          rowsMax={3}
          name="address"
          required={true}
          type="text"
          />
          <br />
          
          <MUI.FlatButton label="SignUp" primary={true} type='submit' />
        </MUI.Paper>
        </form>
      </div>
    );
  }
}

export default SignUp;