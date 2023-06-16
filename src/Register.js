// import React, { useState } from 'react';
// v18 doesn't need this
import { NewUser } from './fetches.js';


export const Register= ({username, setUsername, password, setPassword, token
//no need for setToken because its already happening in the fetch request
}) => {
    async function handleUserRegistration(event) {  
      event.preventDefault();
      await NewUser (username, password, token);
     return (token) }

        return (
            <form>
                <input type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        value={username}
                        required                            
                        onChange={e => setUsername(e.target.value)}>
                </input>
                    <input type="password"
                           name="password"
                           id="password"
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
                           id="confirmPassword"
                           placeholder="Confirm Password"
                           minLength="5"
                           maxLength="20"
                           value={password}
                           required
                           autoComplete="off">
                           </input>
                    <button onClick={handleUserRegistration} type="submit">Register Me</button>
               </form>
            )
  }  
  