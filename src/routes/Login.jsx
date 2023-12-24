import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    async function matchCredentials(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('login-email');
        const password = formData.get('login-password');
        try {
            let user = await login({ email, password });
            setUser(user);
        } catch (error) {
            setError(error);
        }
    }

    const login = ( email, password ) => {
        if (email == 'rohan@abc.com' && password == '123') {
            console.log("Login successfull!");
        }
    }
    

    return (
        <>
            <div className="">
                <h1>Login here</h1>
            </div>
            <div className="form-container">
                {error && <p>{error.message}</p>}
                {user && <Navigate to="/admin" replace={true} />}
                <form onSubmit={matchCredentials}>
                    <p>Your Email:</p>
                    <input type="email" placeholder="abc@xyz.com" name="login-email" />
                    <p>Password</p>
                    <input type="password" placeholder="******" name="login-password" /><br />
                    <button type="submit">Login</button>
                    <br />
                    <Link to={`/register`}>Do not have an account?</Link>
                </form>
            </div>
        </>
    );
}
