import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import usersUtiles from './usersUtiles'




class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], user_id: 0 }
    }

    static getDerivedStateFromProps(props, state) {

        // Check If User id Already in state
        if (state.user_id != props.match.params.id)
        {
            return { user_id: props.match.params.id }
        }
         return null   
    }
   
    
    async componentDidMount() {
        // Getting All The User's Posts And Update State
        let posts = await usersUtiles.getUserPostsById(this.state.user_id)
        this.setState({posts: posts})
    }

    render() { 
        let posts = this.state.posts.map(post => {
            return <li key={ post.id }>{ post.title }</li>
        })
        
        return (
            <div>
                <h2>Posts of User {this.state.user_id}</h2>
                <ul>
                    { posts }
                </ul>
                
                <Link to={ '/' }>Back</Link>
            </div>
          );
    }
}
 
export default Posts;