import React, { useState } from "react";

function LoginForm({ onLogin }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <form onSubmit={handleSubmit} class="pl-12">
            
            <label class="block text-xl font-medium text-teal-700 p-3" htmlFor="name">Name</label>
            <input class="form-control block px-4 py-2 text-3xl font-normal text-indigo-700 bg-white bg-clip-padding border border-solid border-sky-500 rounded transition ease-in-out m-0"
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            
            <label class="block text-xl font-medium text-teal-700 p-2" htmlFor="password">Password</label>
            <input class="form-control block px-4 py-2 text-3xl font-normal text-teal-700 bg-white bg-clip-padding border border-solid border-sky-500 rounded transition ease-in-out m-0"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            <div className="py-2">
            <button className="w-auto rounded bg-indigo-400 py-3 px-6 text-bold text-white hover:bg-indigo-600" type="submit">
                    {isLoading ? "Loading..." : "Login"}
            </button>
            </div>
            
        </form>
    );
}

export default LoginForm;
