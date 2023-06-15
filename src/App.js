import "./App.css";
// import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { NewUser } from './fetches.js';
import { Register } from './Register.js';
import { LoginFunc } from './Login.js';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from './fetches.js';

const Home= (props) => {
  return (
    <div className="home">
      <h2>Welcome Home!</h2>
    </div>
  )
}

const Post= (props) => {
  return (
    <div className="post">
      <h2>Posted Items</h2>
    </div>
  )
}

const Profile= (props) => {
  return (
    <div className="profile">
      <h2>Your Profile</h2>
    </div>
  )
}

// const Login= (props) => {
//   return (
//     <div classname="login">
//       <h2>Welcome Back!</h2>
//     </div>
//   )
// }

function App() {
const [posts, setPosts] = useState([]);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [token, setToken] = useState("");

useEffect (() => {
    const fetchPosts = async() => {
    const resp = await fetch (`${BASE_URL}/posts`);
    const response = await resp.json();
    console.log(response)
    setPosts(response.data.posts);
    //setPosts is a JS function with the posts being passed in
  }
  fetchPosts();
}, [])
// second argument of an empty array will prevent an infinite loop and only change when a list item is updated
return (
    <BrowserRouter>
    <main>
    <div className="App">
      <h1>Stranger's Things</h1>
      <h1 className="Logout">Log Out</h1>
    </div>
        <div className="Navbar">
          <Link id="navHome" to='/home'>HOME</Link>
          <Link id="navPosts" to='/post'>POSTS</Link>
          <Link id="navProfile" to='/profile'>PROFILE</Link>
          <Link id="navRegister" to='/Register'>REGISTER</Link>
          <Link id="navLogin" to='/Login'>LOGIN</Link>
        </div>
        <div>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/post'>
              <Post />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
            <Route exact path='/login'>
              <LoginFunc />
            </Route>
            <Route exact path='/register'>
              <Register 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                token={token}
                setToken={setToken}/>
            </Route> 
        </div>

       { // this section breaks out of react into js
       //the (post. could be called anything as long as it matches the following
       //.title, .id, .description etc, but posts.map has to match the
       //hard-coded key in the object being mapped over
       posts.map(post => {
        return (<div key={post.id}>
          <h3>{post.title}</h3>
          <div>{post.description}</div>
          </div>
          )})
          }

  </main>
  </BrowserRouter>
  );
}


export default App;
