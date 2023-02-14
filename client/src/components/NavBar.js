import React from "react";
import { Link } from "react-router-dom";


function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      {/* className="bg-scroll bg-plant" className="h-14 bg-gradient-to-r from-purple-500 to-pink-500" */}
      <h1 className="text-9xl font-bold  font-mono text-teal-600 hover:text-teal-800 bg-plant text-center py-7">
        <Link className="drop-shadow-4xl" to="/">Thoughtful</Link>
      </h1>
      <div className="h-auto bg-gradient-to-r from-purple-900 to-pink-200">
        <button className="text-3xl font-bold text-teal-600 hover:text-teal-800  text-center p-6">
        <Link to="/new">New Log</Link>
        </button>
        <button className="text-3xl font-bold text-teal-600 hover:text-teal-800  text-center p-6">
          <Link to="/users">User List</Link>
        </button>
        <button variant="outline" onClick={handleLogoutClick} className="text-3xl font-bold text-teal-600 hover:text-teal-800  text-center p-6">
          Logout
        </button>
      </div>
    </div>
  );
}
export default NavBar;
