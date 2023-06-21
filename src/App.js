import "./App.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Register } from './Register.js';
import { LoginFunc } from './Login.js';
import { useEffect, useState } from 'react';
import { BASE_URL, makePost } from './fetches.js';
import { Profile, Post } from './Profile'


function App() {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const Home= (props) => {
    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
      const isLoggedIn = localStorage.getItem("authenticated");
      if (isLoggedIn) {
        setAuthenticated(isLoggedIn);
        setIsLoggedIn(true);
      }
    }, []);
  
    if (!authenticated) {
      return < Link replace to="/login" />;
    } else {
    return (
      <div className="home">
        <h2>Welcome Home!</h2>
      </div>
    )
  }
  }

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
  <main>
    <BrowserRouter>
    
    <div className="App">
      <h1>Stranger's Things</h1>
    </div>
        <div className="Navbar">
          <Link id="navHome" to='/home'>HOME</Link>
          <Link id="navRegister" to='/Register'>REGISTER</Link>
          <Link id="navLogin" to='/Login'>LOG IN</Link>
        </div>
        
        <div>
            <Route exact path='/home'>
                {isLoggedIn ? <button>Make a New Post</button> : <h2>Please Register or Log In to Sell an Item!</h2>}

              { // this section breaks out of react into js
                //the (post. could be called anything as long as it matches the following
                //.title, .id, .description etc, but posts.map has to match the
                //hard-coded key in the object being mapped over
                posts.map(post => {
                 return (<div key={post._id}>
                   <h3>{post.title}</h3>
                   <div>{post.description}</div>
                   <div>{post.price}</div>
                   </div>
                   )})
                   }
            <Home />
            </Route>
              </div>

            {/* <Route exact path='/post'> */}
            <Route exact path='/profile'>
              <Profile />
             { <button id="logout">Log Out</button> }
            <div>
            <Link id="navProfile" to='/profile'>PROFILE</Link>
            </div>
              {/* <Post /> */}
            </Route>
            
            <Route exact path='/login'>
{/* //passing in username and set username same w props to login function */}
              <LoginFunc
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}/>
            </Route>
            
            <Route exact path='/register'>
              <Register 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                token={token}
                setToken={setToken}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}/>
            </Route> 
  </BrowserRouter>
  </main>
  );
}

export default App;
