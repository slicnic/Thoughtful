import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login"
import NewLog from "./pages/NewLog";
import LogList from "./pages/LogList"
import UserList from "./pages/UserList";
import LoginForm from "./components/LoginForm";
// import Navbar from "./App.css"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar className='Navbar' user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route exact path="/new">
            <NewLog user={user} />
          </Route>
          <Route exact path="/">
            <LogList />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
        </Switch>
      </main>
    </>
  );
} 

export default App;


 // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  //  return (
//     <div className="App">
//       <h2>Page Count: {count}</h2>
//       <body>
      
//       </body>
//     </div>
//   );
// }


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
