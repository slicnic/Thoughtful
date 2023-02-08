import { useEffect, useState } from "react";

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
                </>
            )}
        </div>
    );
}


export default UserList;
