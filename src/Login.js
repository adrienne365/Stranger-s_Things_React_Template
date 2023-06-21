import { useState } from 'react';
import { login } from './fetches.js';

export const LoginFunc= () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const users = [{ username, password }];
    const handleLogin = (event) => {
      event.preventDefault(event)
     login (username, password, authenticated); 
      const account = users.find((user) => user.username === username);
      if (account && account.password === password) {
          setAuthenticated(true)
          setIsLoggedIn(true)
          localStorage.setItem("authenticated", true);
          console.log("logged in")
      }
    };
    
    return (
      <div>
        <p>Welcome Back!</p>
        <form onSubmit={handleLogin}>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
   </form>
   </div>
   )
        }
