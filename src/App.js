import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Register } from "./Register.js";
import { LoginFunc } from "./Login.js";
import { BASE_URL } from "./fetches.js";
import { Profile } from "./Profile.js";
import { NewPostFunc } from "./NewPosts.js";
import { CreateMessageFunc } from "./Messages.js";


function App() {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");


  const Home = (props) => {
    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
      const isLoggedIn = localStorage.getItem("authenticated");
      if (isLoggedIn) {
        setAuthenticated(isLoggedIn);
        setIsLoggedIn(true);
      }
    }, []);

    if (!authenticated) {
      return <Link replace to="/Login" />;
    } else {
      return (
        <div className="home">
        </div>
      );
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch(`${BASE_URL}/posts`);
      const response = await resp.json();
      setPosts(response.data.posts);
    };
    fetchPosts();
  }, []);
  
  return (
    <main>
      <BrowserRouter>
        <div className="App">
          <h1>Stranger's Things</h1>
        </div>
        <div className="Navbar">
          <Link id="navHome" to="/home">
            Home
          </Link>
          <Link id="navRegister" to="/Register">
            Register
          </Link>
          <Link id="navLogin" to="/Login">
            Log In
          </Link>
        </div>

        <div>
          <Route exact path="/home">
            <h2>All Sale Posts</h2>
            {isLoggedIn ? (
              [
                <Link to="/newpost">
                  <button>Make a New Post</button></Link>,

                <Link to="/Profile">Your Profile</Link>,
                <Link to="/Messages">Your Messages</Link>,
                  <button id="logout">Log Out</button>,
              ]
            ) : (
              <h2>Please Register or Log In to Sell an Item!</h2>
            )}    
      
            { posts.map((post) => {
                return (
                  <div key={post._id}>
                    <h3>{post.title}</h3>
                    <div>{post.description}</div>
                    <div>{post.price}</div>
                  </div>
                );
              })
            }
            <Home />
          </Route>
        </div>

        <Route exact path="/newpost">
          <NewPostFunc
            posts={posts}
            setPosts={setPosts}
          />
        </Route>

        <Route exact path="/Profile">
          <Profile 
          />
        </Route>

        <Route exact path="/Messages">
          <CreateMessageFunc
            subject={subject}
            setSubject={setSubject}
            content={content}
            setContent={setContent}
            username={username}
          />
        </Route>

        <Route exact path="/Login">
          
          <LoginFunc
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>

        <Route exact path="/Register">
          <Register
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            token={token}
            setToken={setToken}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        </Route>
      </BrowserRouter>
    </main>
  );
}

export default App;
