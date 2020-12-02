import React, { Component } from 'react'
import usersUtiles from './usersUtiles'
import User from './User'




class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    async componentDidMount() {
        let users = await usersUtiles.getAllUsers()
        let tasks = await usersUtiles.getAllTasks()
        let usersFullData = users.map(user => {
            let FullData = user
            FullData.tasks = tasks.filter(task => task.userId === user.id).splice(0, 5)
            return FullData
        })
        this.setState({ users: usersFullData })
    }


    render() { 
        let users = this.state.users.map(user => {
            return <User key={ user.id } user={ user }></User>
        })

        return (

            <div>
                { users }

            </div>
          );
    }
}
 
export default Users;