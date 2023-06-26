import { createPost } from './fetches.js';
import { useState } from 'react';

export const MakePost = () => {
  localStorage.setItem("authenticated", true);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const newPost = [{ name, price, description }];
    createPost (newPost.name, newPost.price, newPost.description)
    console.log(name, price, description);

    return (
    <div>
      <form onSubmit={createPost}>
       <label for="name">Item Name</label>
       <input
        type="text"
        name="Item Name"
        placeholder="Item Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      <label for="price">Item Price $</label>
      <input
        type="text"
        name="Item Price"
        placeholder="Item Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}/>
      <label for="description">Item Description</label>
      <input
      type="text"
      name="description"
      placeholder="Item Description"
      minLength="10"
      maxLength="400"
      value={description}
      onChange={(e) => setDescription(e.target.value)}/>
      <button onClick={MakePost}>Create New Post</button>
 </form>
 </div>
)
}