import '../App.css';
import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class User extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} }
  }

  async componentDidMount() {
    let id = this.props.match.params.id
    let user = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
    this.setState({user: user.data})
  }

  render() { 

    

    return ( 
      <div>
        Name: {this.state.user.name} <br/>
        Email : {this.state.user.email}<br/><br/>
        <Link to='/' >Back</Link>
      </div>
     );
  }
}
 


export default User;
