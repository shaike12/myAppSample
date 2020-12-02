import '../App.css';
import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] }
  }

  async componentDidMount() {
    let resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    let users = resp.data
    users = users.map(user => {
      return {name: user.name, id: user.id}
    })
    this.setState({users: users}) 
  }

  render() { 

    let users = this.state.users.map(user => {
      return (<li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>)
    })
    

    return ( 
      <div>
        <ul>
          {users}
        </ul>         
      </div>
     );
  }
}
 


export default Users;
