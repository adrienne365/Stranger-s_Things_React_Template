const COHORT_NAME = '2303-FTB-ET-WEB-AM'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const NewUser = async (username, password) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: `${username}`,
            password: `${password}`
          }
        })
      });
      const result = await response.json();
      localStorage.token = result.data.token
      return result.data.token
    } catch (err) {
      console.error(err);
    }
  }

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
      return result
    } catch (err) {
      alert(err.error.message);
      console.error(err);
      <p className="login-fail">Please Register</p>
    }
  }

  const newPost = async (title, price, description) => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            post: {
               title: title,
               description: description,
               price: ('$' + price)
          },
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      alert(err.error.message);
      console.error(err);

    }
  }

  const newMessage = async (id, content, post, fromUser, createdAt, updatedAt) => {
    try {
      const response = await fetch(`${BASE_URL}/Profile.js`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          message: {
            _id: id,
            content: content,
            post: post,
            fromUser: fromUser,
            createdAt: createdAt,
            updatedAt: updatedAt
      }}),
    });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  // const myProfile = async () => {
  //   try {
  //     const response = await fetch(`${BASE_URL}/users/me`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${localStorage.getItem('token')}`
  //       },
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //     return result
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  
  export { NewUser };
  export { newPost };
  export { login };
  // export { myProfile };
  export { newMessage };
  export { BASE_URL };
