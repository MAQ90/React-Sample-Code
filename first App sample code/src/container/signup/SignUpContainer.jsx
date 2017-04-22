import React, { Component } from 'react';
import {connect} from 'react-redux';

import SignUp from '../../component/signUp/signUp';

const mapDispatchToProps = (dispatch) =>{

return
    createUserRequest: (credential)=> dispatch(createUserRequest(credential))
}

class SignUpContainer extends Component {


 
  render() {
        return (
          <SignUp  />
        );}
}

export default connect(null,mapDispatchToProps)(SignUpContainer);