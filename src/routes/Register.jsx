import { Link } from "react-router-dom";

export default function Register () {
    return <>
        <div className="">
            <h1>Create an Account</h1>
        </div>
        <div className="form-container">
            <p>Your Name:</p>
            <input type="text" placeholder="Enter your name" />
            <p>Your ID:</p>
            <input type="text" placeholder="Enter your id" />
            <p>Your Email:</p>
            <input type="email" placeholder="abc@xyz.com" />
            <p>Set Password:</p>
            <input type="password" placeholder="****" /><br />
        <button type="submit">Register</button><br />
        <Link to={`/login`}>Already have an account?</Link>
        </div>
    </>
}