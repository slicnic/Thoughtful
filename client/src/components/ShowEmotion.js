import { useState,useEffect } from "react";

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
    <li>Emotion: {emotion.emotion}, id: {emotion.id}</li>
  ))

  return(
    <div>
      <ul>
        {mappedEmotions}
      </ul>
    </div>
  ) 
}


// function showEmotion() {
//   fetch("/emotions")
//     .then(r => r.json())
//     .then(data => emotion)

// }
// function NewEmotion({ user }) {
//   const [emotion, setEmotion] = useState("");

//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const history = useHistory();

//   function handleSubmit(e) {
//     e.preventDefault();
//     setIsLoading(true);
//     fetch("/emotions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         emotion,
//       }),
//     }).then((r) => {
//       setIsLoading(false);
//       if (r.ok) {
//        history.push("/")
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }

//   return (
//     <div>
//       <div>
//         <h2>Create New Emotion</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="content">Emotion goes here...</label>
//             <input
//               type="text"
//               id="emotion"
//               value={emotion}
//               onChange={(e) => setEmotion(e.target.value)}
//             />
//           </div>
//           <>
//             <button type="submit">{isLoading ? "Loading..." : "Submit Emotion"}</button>
//           </>
//         </form>
//       </div>
//       <div>
//         <h1>{Emotion}</h1>
//         <p>
//           <cite>By {user.name}</cite>
//         </p>
//       </div>
//     </div>
//   );
// }

/*const Wrapper = className = 'Navbar';
//   max-width: 1000px;
//   margin: 40px auto;
//   padding: 16px;
//   display: flex;
//   gap: 24px;
// `;

const WrapperChild = className = 'Navbar';
//   flex: 1;
// `;
*/

export default ShowEmotion;
