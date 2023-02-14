import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="flex h-screen flex-col bg-plant bg-cover justify-center"> 
            {/* bg-[length:2200px_1000px] */}
            <div className="mx-auto  p-40">
                <div class="h-auto w-auto bg-sky-200/25">
                    <h1 className="text-6xl font-mono drop-shadow-4xl font-bold text-indigo-400 text-center py-10">
                            Thoughtful
                        </h1>
                    {showLogin ? (
                        <>
                            <LoginForm onLogin={onLogin} />
                                <p className="text-xl font-bold text-gray-600  text-center p-6">
                                Don't have an account? &nbsp;
                                <button className="w-auto rounded bg-indigo-400 py-3 px-6 text-white hover:bg-indigo-600" onClick={() => setShowLogin(false)}>
                                    Sign Up
                                </button>
                            </p>
                        </>
                    ) : (
                        <>
                            <SignUpForm onLogin={onLogin} />
                                    <p className="text-3xl font-bold text-teal-600  text-center p-6">
                                Already have an account? &nbsp;
                                <button color="secondary" onClick={() => setShowLogin(true)} className="text-3xl font-bold text-teal-600 hover:text-teal-800  text-center p-6">
                                    Log In
                                </button>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
