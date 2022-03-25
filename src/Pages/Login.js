import React from "react";

const Login = () => {
    return (
        <div className='login-box'>
            <h1 className='login-title'><strong>Log In</strong></h1>
            <form className='login-details'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email"/>
                <label className='password' htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password"/>
                <button type="submit" className='link link-pick login-submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login;