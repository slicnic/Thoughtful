import React from "react";
import { Link } from "react-router-dom";
//import styled from "styled-components";
// import { Button } from "../styles";

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
      <h1>
        <Link to="/">Thoughtful</Link>
      </h1>
      <div>
        <button>
        <Link to="/new">New Log</Link>
        </button>
        <button>
          <Link to="/users">User List</Link>
        </button>
        {/* <button as={Link} to="/new">
          New Log
        </button> */}
        <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    </div>
  );
}

/*const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;
*/
export default NavBar;
