import { Link, Navigate } from "react-router-dom";

export default function Login() {
    const matchCredentials = () => {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        if (email == "library@10minuteschool.com" && password == "10msLibrary") {
            console.log("Admin Credential matched!");
            return <Navigate to="/admin" />;
        } else {
            alert("Credentials didn't match!")
        }        
        console.log(email, password);
    };

    return (
        <>
            <div className="">
                <h1>Login here</h1>
            </div>
            <div className="form-container">
                <p>Your Email:</p>
                <input type="email" placeholder="abc@xyz.com" name="" id="login-email" />
                <p>Password</p>
                <input type="password" placeholder="******" name="" id="login-password" /><br />
                <button onClick={matchCredentials} type="submit">Login</button>
                <br />
                <Link to={`/register`}>Do not have an account?</Link>
            </div>
        </>
    );
}
