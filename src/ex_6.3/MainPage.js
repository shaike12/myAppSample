import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Users from './Users'
import Posts from './Posts'


class MainPage extends Component {
  constructor(props) {
    super(props);
}

  render() { 

    return ( 
      <div>
        <h1>Users</h1>
        <Switch>
            <Route exact path='/' component={Users}></Route>
            <Route path='/posts/:id?' component={Posts}></Route>
        </Switch>
          
      </div>
     );
  }
}
 


export default MainPage;
