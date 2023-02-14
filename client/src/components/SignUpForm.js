import React, { useState } from "react";


function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: passwordConfirmation,
      }),
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
      <>
        <label class="block text-xl font-medium text-teal-700 p-2" htmlFor="name">Name</label>
        <input class="form-control block px-4 py-2 text-3xl font-normal text-indigo-700 bg-white bg-clip-padding border border-solid border-sky-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red focus:outline-none"
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </>
      <>
        <label class="block text-xl font-medium text-teal-700 p-2" htmlFor="password">Password</label>
        <input class="form-control block px-4 py-2 text-3xl font-normal text-indigo-700 bg-white bg-clip-padding border border-solid border-sky-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red focus:outline-none"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </>
      <>
        <label class="block text-xl font-medium text-teal-700 p-2" htmlFor="password">Password Confirmation</label>
        <input class="form-control block px-4 py-2 text-3xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-sky-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red focus:outline-none"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </>
      <>
        <button class="block text-xl font-medium text-teal-700 p-2" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </>
      {/* <>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </> */}
    </form>
  );
}

export default SignUpForm;
