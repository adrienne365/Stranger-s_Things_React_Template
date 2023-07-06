import { newPost } from "./fetches.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const NewPostFunc = (props) => {
  let history = useHistory();
  let posts = props.posts
  let setPosts = props.setPosts
  localStorage.setItem("authenticated", true);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  
  const handlePost = async (event) => {
    event.preventDefault(event)
    const result = await newPost(title, price, description)
    setPosts([
      ...posts,
      result.data.post
      ]);
      history.push("/Profile")
}
  
  return (
    <div>
      <form onSubmit={handlePost}>
        <label for="title">Post Title</label>
        <input
          type="text"
          name="Post Title"
          placeholder="Post Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for="price">Item Price $</label>
        <input
          type="text"
          name="Item Price"
          placeholder="Item Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label for="description">Item Description</label>
        <input
          type="text"
          name="description"
          placeholder="Item Description"
          minLength="10"
          maxLength="400"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handlePost}
          >Create New Post</button>
          </form>
    </div>
    )
}