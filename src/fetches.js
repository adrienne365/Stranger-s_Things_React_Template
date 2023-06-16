const COHORT_NAME = '2303-FTB-ET-WEB-AM'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

// const Bearer = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhjNmM4MTRiYWUwNzAwMTQ1OTdlNjYiLCJ1c2VybmFtZSI6IkJhbmFuYXMiLCJpYXQiOjE2ODY5MjQ0MTd9.Py1ZM2bVd1qfddEZ11pK1ascIRucLYXbRQUisT2M5i4'

const NewUser = async (username, password) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
         //json translation language
        body: JSON.stringify({
          user: {
            username: `${username}`,
            password: `${password}`
          }
        })
      });
      const result = await response.json();
      console.log(result)
      localStorage.token = result.data.token
      return result.data.token
    } catch (err) {
      console.error(err);
    }
  }
  // lowercase for function
  const login = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          }
        })
      });
      const result = await response.json();
      console.log(result);
      localStorage.token = result.data.token
      //adds token to local storage not just session storage
      return result
    } catch (err) {
      alert(err.error.message);
      console.error(err);
    }
  }

  const makePost = async () => {

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          post: {
            title: "My favorite stuffed animal",
            description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
            price: "$480.00",
            willDeliver: true
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }


  export { NewUser };
  export { login };
  export { BASE_URL };
