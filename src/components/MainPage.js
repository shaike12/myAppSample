import '../App.css';
import React, {Component} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Users from '../components/Users'
import User from '../components/User'


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { names: [] }
}



  render() { 


    return ( 
      <div>
        <Switch>
            <Route exact path='/' component={Users}></Route>
            <Route path='/user/:id' component={User}></Route>
        </Switch>
          
      </div>
     );
  }
}
 


export default MainPage;
