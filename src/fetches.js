const COHORT_NAME = '2303-FTB-ET-WEB-AM'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

// const TOKEN_STRING_HERE

const NewUser = async (username, password) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: `${username}`,
            password: `${password}`
          }
        })
      });
      const result = await response.json();
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const Login = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
      const result = await response.json();
      console.log(result);
      localStorage.token = result.data.token
      return result
    } catch (err) {
      alert(err.error.message);
      console.error(err);
    }
  }

  export { NewUser };
  export { Login };
  export { BASE_URL };
