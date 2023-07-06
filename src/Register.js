import { NewUser } from './fetches.js';

export const Register= ({username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, token
}) => {
    async function handleUserRegistration(event) { 
      event.preventDefault();
      await NewUser (username, password, token);
      if (event.target.password === event.target.confirmPassword) {
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
            
  