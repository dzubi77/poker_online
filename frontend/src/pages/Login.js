import React from 'react';
import '../styles/style.css';

function Login() {
    return (
        <>
            <div className="loginContent">
                <h1>Login page</h1>
                <div className="loginFormContent">
                    <label className='formLabel'>Username:</label>
                    <br></br>
                    <input type='text' />
                    <br></br>
                    <label className='formLabel'>Password:</label>
                    <br></br>
                    <input type='password' />
                    <br></br>
                </div>
                <div className='loginSignUp'>
                    <a href="/login" type='button' className='btn btn-primary'>Log in</a>
                    <p>
                        Don't have an account? Click&nbsp;
                        <a href="/login">here</a> to sign up.
                    </p> 
                </div>
                <span>
                    Click&nbsp;
                    <a href="/">here</a> to go to the home page.
                </span>
            </div>
        </>
    );
}

export default Login;