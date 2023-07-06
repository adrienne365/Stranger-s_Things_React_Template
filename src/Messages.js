import { newMessage } from "./fetches.js";
import { useState } from "react";
import { LoginFunc } from "./Login.js";

export const CreateMessageFunc = (props) => {
localStorage.setItem("authenticated", true);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const username = LoginFunc.username;

  async function handleMessage(event) {
    event.preventDefault(event)
    const result = await newMessage(subject, content, username)

return (
    <div>
      <form onSubmit={handleMessage}>
        <label for="subject">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label for="content">Content</label>
        <input
          type="text"
          name="content"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
            <button onClick={handleMessage}>Send Message</button>
      </form>
    </div>
)
}};