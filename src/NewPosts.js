import { BASE_URL } from './fetches.js';

export const makePost = async (event, newPost, setNewPost, price, setPrice, description, setDescription) => {
  event.preventDefault(event)
  localStorage.setItem("authenticated", true);
    try {
      const response = await fetch(`${BASE_URL}users/posts`, {
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
      const result = await response.json()
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }

  return (
    <div>
      <form onSubmit={makePost}>
       <label for="name">Item Name</label>
       <input
        type="text"
        name="Item Name"
        placeholder="Item Name"
        required
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}/>
      <label for="price">Item Price</label>
      <input
        type="text"
        name="Item Price"
        placeholder="Item Price in Dollars"
        value={price}
        onChange={(e) => setPrice(e.target.value)}/>
      <label for="description">Item Description</label>
      <input
      type="text"
      name="description"
      placeholder="Item Description, max 400 characters"
      minLength="10"
      maxLength="400"
      value={description}
      onChange={(e) => setDescription(e.target.value)}/>
      <button onClick={makePost}>Create New Post</button>
 </form>
 </div>
)}
