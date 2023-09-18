import { Link } from "react-router-dom";

export default function Login () {
    return <>
        <div className="">
            <h1>Login here</h1>
        </div>
        <div className="form-container">
            <p>Your Email:</p>
            <input type="email" placeholder="abc@xyz.com" name="" id="" />
            <p>Password</p>
            <input type="password" placeholder="******" name="" id="" /><br />
            <button type="submit">Login</button>
            <br />
            <Link to={`/register`}>Do not have an account?</Link>
        </div>
    </>
}