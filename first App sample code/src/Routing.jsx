import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Component

import App from './component/App/App';
import Home from './component/home/home';
import SignUpContainer from './container/signup/SignUpContainer';
import SignIn from './container/signIn/SignIn';

class Routing extends Component {
  render() {
    return (
      <MuiThemeProvider>
     <Router history={browserHistory}>  
       
       <Route path='/home' component={Home}/>
         <Route path='/signUp' component={SignUpContainer}/>
        

          <Route path='/' component={App}>
              <IndexRoute component={SignIn}/>
          </Route>

         
  </Router>
  </MuiThemeProvider>
    );
  }
}

export default Routing;