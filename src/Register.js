import React, { useState } from 'react';
import { NewUser } from './fetches.js';

export const Register= ({username, setUsername, password, setPassword, token, setToken}) => {
    async function handleUserRegistration(event) {  
      event.preventDefault();
      await NewUser (username, password);  
        console.log(username, password)
        }
        
// function registerUserFunc() {
        return (
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
                           minLength="5"
                           maxLength="20"
                           value={password}
                           required
                           autoComplete="off"
                           onChange={e => setPassword(e.target.value)}>
                           </input>
                    <input type="password"
                           name="confirmPassword"
                           placeholder="Confirm Password"
                           minLength="5"
                           maxLength="20"
                          //  value={password}
                           required
                           autoComplete="off"
                           onChange={e => setPassword(e.target.value)}>
                           </input>
                    <button onClick={handleUserRegistration} type="submit">Register Me</button>
               </form>
            )
        // }
        
    return (
      <div className="register">
        <h2>Register Here</h2>
        {/* { registerUserFunc() } */}
      </div>
    )
  }  

  // export { registerUserFunc };
  