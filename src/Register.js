// import React, { useState } from 'react';
// v18 doesn't need this
import { NewUser } from './fetches.js';

export const Register= ({username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, token
//no need for setToken because its already happening in the fetch request
}) => {
    async function handleUserRegistration(event) { 
      console.log("handleUserRegistrationhit")
      event.preventDefault();
      await NewUser (username, password, token);
        console.log(event.target.password)
      if (event.target.password === event.target.confirmPassword) {
        console.log("huzzah!")
      }
        }

        return (
            <form onSubmit={handleUserRegistration}>
                <input  type="text"
                        name="username"
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
                           value={confirmPassword}
                           required
                           autoComplete="off"
                           onChange={e => setConfirmPassword(e.target.value)}>
                           </input>
                    <button type="submit" id="registerButton">Register Me</button> 
               </form>
            )
          }
            
  