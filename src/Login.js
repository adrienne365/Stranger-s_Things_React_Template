import React, { useState } from 'react';
import { Login } from './fetches.js';
// import { Register } from './Register.js';
// import App from './App.js';



export const LoginFunc= ({username, setUsername, password, setPassword}) => {
    async function handleLogin(event) {  
        event.preventDefault();
        await Login (username, password);  
          console.log(username, password)
    }

        return ( 
            <div className="login">
            <h2>Welcome Back!</h2>
        <form>
    <input type="text"
            name="username"
            placeholder="Username"
            value={username}
            required                            
            onChange={e => setUsername(e.target.value)}>
    </input>
        <input type="password"
               name="password"
               placeholder="Password"
               value={password}
               required
               autoComplete="off"
               onChange={e => setPassword(e.target.value)}>
               </input>
        <button onClick={handleLogin} >Login</button>
   </form>
   </div>
   )
        }
