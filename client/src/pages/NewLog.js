import { useState } from "react";
import { useHistory } from "react-router-dom";
import ShowEmotion from "../components/ShowEmotion";

function NewLog({ user }) {
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState("");
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        user_id: user.id,
        emotion_id: emotion
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
       history.push("/")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <div>
        <h2>Create New Log</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="content">Content goes here...</label>
            <input
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="emotion">Emotion id goes here...</label>
            <input
              type="text"
              id="emotion"
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
            />
          </div>
          <>
            <button type="submit">{isLoading ? "Loading..." : "Submit Log"}</button>
          </>
        </form>
      </div>
      <div>
       <ShowEmotion/>
        <h1>{content}</h1>
        <h2>{emotion}</h2>
        <p>
          <cite>By {user.name}</cite>
        </p>
      </div>
    </div>
  );
}

export default NewLog;
