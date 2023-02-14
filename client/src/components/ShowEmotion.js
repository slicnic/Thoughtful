import { useState,useEffect } from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function ShowEmotion(){
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    fetch("/emotions")
    .then((r) => r.json())
    .then((data) => {
      console.log(data)
      setEmotions(data);
    });
  },[]);

  const mappedEmotions = emotions.map((emotion)=>(
    <li> {emotion.emotion}, ID: {emotion.id}</li>
    // { capitalizeFirstLetter({ emotion.emotion })}
  ))

  return(
    <div>
      <ul>
        {mappedEmotions}
      </ul>
    </div>
  ) 
}

export default ShowEmotion;
