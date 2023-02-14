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
    <div>
    <section>
      <NavBar className='Navbar' user={user} setUser={setUser} />
      </section>
      <div>
        {/* class="bg-scroll bg-plant" */}
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
      </div>
    </div>
  );
} 

export default App;

