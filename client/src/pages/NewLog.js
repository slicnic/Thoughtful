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
    <div class="bg-plant bg-scroll bg-cover">
      <div >
        <h2 className="text-6xl font-mono font-bold text-teal-600 p-6">
          Create New Log</h2>
        <p className="text-xl font-mono font-bold text-black-600 p-6"> Today's emotion list:</p>
        <ShowEmotion />
        {/* <h1>{content}</h1>
        <h2>{emotion}</h2> */}
        <p>
          <cite>This log created by {user.name}</cite>
        </p>
        <p className="text-xl font-mono font-bold text-black-600 p-6"> Select one by in-putting the ID in the form below</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-xl font-mono font-bold text-teal-700 text-center p-2" htmlFor="content">Your log for today goes here:</label>
            <input class="form-control block px-8 py-3 text-3xl font-normal text-indigo-700 bg-white bg-clip-padding border border-solid border-sky-500 rounded transition ease-in-out m-0"
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xl font-mono font-bold text-teal-700 text-center p-2" htmlFor="emotion">Emotion ID goes here:</label>
            <input class="form-control block px-8 py-3 text-3xl font-normal text-indigo-700 bg-white bg-clip-padding border border-solid border-sky-500 rounded transition ease-in-out m-0"
              type="text"
              id="emotion"
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
            />
          </div>
          <div className=" py-5">
            <button className="w-auto rounded bg-blue-500 py-3 px-6 text-white hover:bg-blue-600 focus:bg-blue-400"type="submit">{isLoading ? "Loading..." : "Submit Log"}</button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default NewLog;
