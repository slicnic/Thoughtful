import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { Box, Button } from "../styles";

function UserList() {
    const [users, setUsers] = useState([]);
    console.log(users)
    useEffect(() => {
        fetch("/users")
            .then((r) => r.json())
            .then(data =>{
                console.log(data)
                setUsers(data)
                console.log(users)
            });
    }, []);

    return (
        <div>
            <h3>Current User Count {users.length}</h3>
            {users.length > 0 ? (
                users.map((user) => (
                    <p>{user.name}</p>
                ))
            ) : (
                <>
                    <h2>No Users Found</h2>
                    {/* <button as={Link} to="/">
                       Home
                    </button> */}
                </>
            )}
        </div>
    );
}

// const Wrapper = styled.section`
//   max-width: 800px;
//   margin: 40px auto;
// `;

// const Movie = styled.article`
//   margin-bottom: 24px;
// `;

export default UserList;
