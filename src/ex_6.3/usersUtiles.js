import axios from 'axios'



const getAllUsers = async () => {
    let resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    return resp.data
}

const getAllTasks = async () => {
    let resp = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return resp.data
}

const getUserPostsById = async (userId) => {
    let resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
    let posts = resp.data
    let userPosts = posts.filter(post => post.userId == userId)
    return userPosts
}


export default { getAllUsers, getAllTasks, getUserPostsById }