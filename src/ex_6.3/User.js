import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'




class User extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {}, isHidden: 'none' }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.user.id == state.user.id) {
            return null
        }
        return { user: props.user }
    }

    showTasks = (e) => {

        e.preventDefault()
        if (this.state.isHidden == 'block') {
            this.setState({ isHidden: 'none'})
        }
        else
        {
            this.setState({ isHidden: 'block'})
        }
        

    }

    render() { 
        // console.log(this.state.user)
        let tasks = this.state.user.tasks.map(task => {
            return <li key= { task.id }>{ task.title }</li>
        })
        

        return (
            <div>
                <div key={ this.state.user.id } style={{
                    border: '1px solid black',
                    width: '400px',
                    margin: '10px',
                    padding: '10px'
                }}>
                User ID: { this.state.user.id }<br/>
                Name: { this.state.user.name } <br/>
                Email: { this.state.user.email }<br/>
                
                <button onClick={ e => this.showTasks(e) }>Tasks</button>
                <button><Link to={ `/posts/${this.state.user.id}` }>Posts</Link></button>
                <div style={{
                        display: this.state.isHidden,
                        border: "1px solid black",
                        padding: '10px',
                        margin: '10px'
                }}>
                    <ul>
                        { tasks }
                    </ul>
                </div>
                
            </div>
            </div>
          );
    }
}
 
export default User;