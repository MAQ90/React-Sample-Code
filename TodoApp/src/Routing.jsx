import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

//Component

import App from './component/App/App';
import Home from './component/home/home';
import SignUp from './component/signUp/signUp';
import LogIn from './component/logIn/logIn';
import Todo from './container/todo/todo';

class Routing extends Component {
  render() {
    return (
     <Router history={browserHistory}>  
       
       <Route path='/home' component={Home}/>
         <Route path='/logIn' component={LogIn}/>
        <Route path='/signUp' component={SignUp}/>

          <Route path='/' component={App}>
              <IndexRoute component={Todo}/>
          </Route>

         
  </Router>
    );
  }
}

export default Routing;